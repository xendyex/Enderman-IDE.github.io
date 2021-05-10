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

import addons from './addons.json';
import addonIdToL10n from './generated/addon-id-to-l10n';

/**
 * Get addon translations.
 * @param {string} language The locale code
 * @returns {object} Object of translation ID to localized string or English fallback
 */
export default function getTranslations (language) {
    const result = {};
    for (const addonId of addons) {
        const l10n = addonIdToL10n[addonId];
        if (l10n.en) {
            Object.assign(result, l10n.en());
        }
        if (language !== 'en' && l10n[language]) {
            Object.assign(result, l10n[language]());
        }
    }
    return result;
}
