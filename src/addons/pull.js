/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-nodejs-modules */
/* eslint-disable no-console */
/* eslint-disable max-len */

const fs = require('fs');
const childProcess = require('child_process');
const rimraf = require('rimraf');
const request = require('request');
const pathUtil = require('path');
const addons = require('./addons.json');

const walk = dir => {
    const children = fs.readdirSync(dir);
    const files = [];
    for (const child of children) {
        const path = pathUtil.join(dir, child);
        const stat = fs.statSync(path);
        if (stat.isDirectory()) {
            const childChildren = walk(path);
            for (const childChild of childChildren) {
                files.push(pathUtil.join(child, childChild));
            }
        } else {
            files.push(child);
        }
    }
    return files;
};

const repoPath = pathUtil.resolve(__dirname, 'ScratchAddons');
if (!process.argv.includes('-')) {
    rimraf.sync(repoPath);
    childProcess.execSync(`git clone --depth=1 -b tw https://github.com/GarboMuffin/ScratchAddons ${repoPath}`);
}
rimraf.sync(pathUtil.resolve(__dirname, 'addons'));
rimraf.sync(pathUtil.resolve(__dirname, 'libraries'));
rimraf.sync(pathUtil.resolve(__dirname, 'generated'));

process.chdir(repoPath);
const commitHash = childProcess.execSync('git rev-parse --short HEAD')
    .toString()
    .trim();

const matchAll = (str, regex) => {
    const matches = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
        matches.push(match);
    }
    return matches;
};

const writeFile = (path, data) => {
    fs.mkdirSync(pathUtil.dirname(path), {recursive: true});
    fs.writeFileSync(path, data);
};

const includeImportedLibraries = contents => {
    // Parse things like:
    // import { normalizeHex, getHexRegex } from "../../libraries/normalize-color.js";
    // import RateLimiter from "../../libraries/rate-limiter.js";
    const matches = matchAll(contents, /import +(?:{.*}|.*) +from +["']\.\.\/\.\.\/libraries\/([\w\d_\/-]+(?:\.esm)?\.js)["'];/g);
    for (const match of matches) {
        const libraryFile = match[1];
        const oldLibraryPath = pathUtil.resolve(__dirname, 'ScratchAddons', 'libraries', libraryFile);
        const newLibraryPath = pathUtil.resolve(__dirname, 'libraries', libraryFile);
        const libraryContents = fs.readFileSync(oldLibraryPath, 'utf-8');
        const newLibraryDirName = pathUtil.dirname(newLibraryPath);
        fs.mkdirSync(newLibraryDirName, {
            recursive: true
        });
        fs.writeFileSync(newLibraryPath, libraryContents);
    }
};

const includeDynamicallyImportedAssets = (folder, contents) => {
    const dynamicAssets = walk(folder)
        .filter(file => file.endsWith('.svg') || file.endsWith('.png'));

    const stringifyPath = path => JSON.stringify(path).replace(/\\\\/g, '/');

    // Then we'll generate some JS to import them.
    let header = '/* inserted by pull.js */\n';
    dynamicAssets.forEach((file, index) => {
        header += `import _twAsset${index} from ${stringifyPath(`./${file}`)};\n`;
    });
    header += `const _twGetAsset = (path) => {\n`;
    dynamicAssets.forEach((file, index) => {
        header += `  if (path === ${stringifyPath(`/${file}`)}) return _twAsset${index};\n`;
    });
    // eslint-disable-next-line no-template-curly-in-string
    header += '  throw new Error(`Unknown asset: ${path}`);\n';
    header += '};\n';
    header += '\n';

    // And now we reroute everything to use our imports.
    // Parse things like:
    // el.src = addon.self.dir + "/" + name + ".svg";
    //          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  match
    //                           ^^^^^^^^^^^^^^^^^^^  capture group 1
    contents = contents.replace(
        /\${addon\.self\.(?:dir|lib) *\+ *([^;\n]+)}/g,
        (_fullText, name) => `\${_twGetAsset(${name})}`
    );
    contents = contents.replace(
        /addon\.self\.(?:dir|lib) *\+ *([^;,]+)/g,
        (_fullText, name) => `_twGetAsset(${name})`
    );

    return header + contents;
};

request('https://raw.githubusercontent.com/ScratchAddons/contributors/master/.all-contributorsrc', (err, response, body) => {
    const parsed = JSON.parse(body);
    const contributors = parsed.contributors.filter(({contributions}) => contributions.includes('translation'));
    // TODO: remove useless information
    const contributorsPath = pathUtil.resolve(__dirname, 'translators.json');
    fs.writeFileSync(contributorsPath, JSON.stringify(contributors, null, 4));
});

const l10nRoot = pathUtil.resolve(__dirname, 'ScratchAddons', 'addons-l10n');
const getL10nFile = (lang, addonId) => pathUtil.join(l10nRoot, lang, `${addonId}.json`);
const allLanguages = fs.readdirSync(l10nRoot).filter(i => fs.existsSync(getL10nFile(i, '_general')));

for (const addonId of addons) {
    const oldSourceDirectory = pathUtil.resolve(__dirname, 'ScratchAddons', 'addons', addonId);
    const newSourceDirectory = pathUtil.resolve(__dirname, 'addons', addonId);

    const addonLanguages = [];
    for (const language of allLanguages) {
        const l10nPath = getL10nFile(language, addonId);
        if (fs.existsSync(l10nPath)) {
            addonLanguages.push(language);
            const l10nContents = fs.readFileSync(l10nPath, 'utf-8');
            const newPath = pathUtil.join(newSourceDirectory, 'l10n', `${language}.json`);
            // Parse and stringify to validate and minimize
            writeFile(newPath, JSON.stringify(JSON.parse(l10nContents)));
        }
    }

    let manifest;
    for (const file of walk(oldSourceDirectory)) {
        const oldPath = pathUtil.join(oldSourceDirectory, file);
        const newPath = pathUtil.join(newSourceDirectory, file);

        let contents = fs.readFileSync(oldPath);
        if (file.endsWith('.js')) {
            contents = contents.toString('utf-8');
            includeImportedLibraries(contents);
            if (contents.includes('addon.self.dir') || contents.includes('addon.self.lib')) {
                contents = includeDynamicallyImportedAssets(oldSourceDirectory, contents);
            }
        }
        if (file === 'addon.json') {
            contents = contents.toString('utf-8');
            manifest = JSON.parse(contents);
            delete manifest.versionAdded;
            delete manifest.libraries;
            delete manifest.l10n;
            delete manifest.dynamicEnable;
            delete manifest.dynamicDisable;
            delete manifest.injectAsStyleElt;
            contents = JSON.stringify(manifest, null, 2);
        }

        writeFile(newPath, contents);
    }

    const l10nEntry = pathUtil.join(newSourceDirectory, 'l10n.js');
    let l10nSource = '';
    l10nSource += '/* generated by pull.js */\n';
    l10nSource += `export default {\n`;
    addonLanguages.forEach(lang => {
        l10nSource += `  ${JSON.stringify(lang)}: () => require(${JSON.stringify(`./l10n/${lang}.json`)}),\n`;
    });
    l10nSource += `};\n`;
    writeFile(l10nEntry, l10nSource);

    const runnerEntry = pathUtil.join(newSourceDirectory, 'run.js');
    let runnerSource = '';
    runnerSource += '/* generated by pull.js */\n';
    runnerSource += `import AddonRunner from "../../api.js";\n`;
    runnerSource += `import manifest from "./addon.json";\n`;
    runnerSource += `import l10n from "./l10n.js";\n`;
    const userscripts = manifest.userscripts || [];
    const userstyles = manifest.userstyles || [];
    runnerSource += `const runner = new AddonRunner(${JSON.stringify(addonId)}, manifest);\n`;
    runnerSource += `runner.l10n(l10n);\n`;
    userscripts.forEach(({url}) => {
        runnerSource += `runner.userscript(${JSON.stringify(url)}, () => require(${JSON.stringify(`./${url}`)}));\n`;
    });
    userstyles.forEach(({url}) => {
        runnerSource += `runner.userstyle(${JSON.stringify(url)}, () => require(${JSON.stringify(`!!raw-loader!./${url}`)}));\n`;
    });
    runnerSource += 'runner.run();\n';
    writeFile(runnerEntry, runnerSource);
}

// TODO bundles
const addonIdToEntryPath = pathUtil.resolve(__dirname, 'generated', 'addon-id-to-entry.js');
const addonIdToL10nPath = pathUtil.resolve(__dirname, 'generated', 'addon-id-to-l10n.js');
let addonIdToEntryContent = '';
addonIdToEntryContent += `/* generated by pull.js */\n`;
addonIdToEntryContent += `export default {\n`;
let addonIdToL10nContent = '';
addonIdToL10nContent += `/* generated by pull.js */\n`;
addonIdToL10nContent += `export default {\n`;
for (const addonId of addons) {
    addonIdToEntryContent += `  ${JSON.stringify(addonId)}: () => import(/* webpackChunkName: ${JSON.stringify(`addon-${addonId}`)} */ ${JSON.stringify(`../addons/${addonId}/run.js`)}),\n`;
    addonIdToL10nContent += `  ${JSON.stringify(addonId)}: require(${JSON.stringify(`../addons/${addonId}/l10n.js`)}).default,\n`;
}
addonIdToEntryContent += `};\n`;
addonIdToL10nContent += '};\n';
writeFile(addonIdToEntryPath, addonIdToEntryContent);
writeFile(addonIdToL10nPath, addonIdToL10nContent);

const extensionManifestPath = pathUtil.resolve(__dirname, 'ScratchAddons', 'manifest.json');
const upstreamMetaPath = pathUtil.resolve(__dirname, 'upstream-meta.json');
const extensionManifest = JSON.parse(fs.readFileSync(extensionManifestPath, 'utf8'));
const versionName = extensionManifest.version_name;
fs.writeFileSync(upstreamMetaPath, JSON.stringify({
    version: versionName,
    commit: commitHash,
    languages: allLanguages
}));
