import translations from './translations.json';
import minimalScratch from './minimal-scratch-l10n.json';

const mergeMessages = messages => {
    for (const language of Object.keys(translations)) {
        if (language.startsWith('_')) {
            continue;
        }
        const languageMessages = (messages[language] || (messages[language] = {}));
        const newMessages = translations[language];
        for (const messageId of Object.keys(newMessages)) {
            languageMessages[messageId] = newMessages[messageId];
        }
    }
    for (const language of Object.keys(minimalScratch)) {
        if (language.startsWith('_')) {
            continue;
        }
        const languageMessages = (messages[language] || (messages[language] = {}));
        const newMessages = minimalScratch[language];
        for (const messageId of Object.keys(newMessages)) {
            languageMessages[messageId] = newMessages[messageId];
        }
    }
};

export default mergeMessages;
