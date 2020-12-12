import translations from './translations.json';
import translationAliases from './aliases.json';
import minimalScratch from './minimal-scratch-l10n.json';

const mergeMessages = messages => {
    for (const language of Object.keys(translations)) {
        if (language.startsWith('_')) {
            continue;
        }
        const newMessages = translations[language];
        const aliases = translationAliases[language] || [language];
        for (const alias of aliases) {
            const languageMessages = (messages[alias] || (messages[alias] = {}));
            for (const messageId of Object.keys(newMessages)) {
                languageMessages[messageId] = newMessages[messageId];
            }
        }
    }
    for (const language of Object.keys(minimalScratch)) {
        if (language.startsWith('_')) {
            continue;
        }
        const newMessages = minimalScratch[language];
        const languageMessages = (messages[language] || (messages[language] = {}));
        for (const messageId of Object.keys(newMessages)) {
            languageMessages[messageId] = newMessages[messageId];
        }
    }
};

export default mergeMessages;
