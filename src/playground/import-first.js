import './public-path';
import './check-dependencies';
import log from '../lib/log';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(`${process.env.ROOT}service-worker.js`)
            .then(worker => {
                log.info('sw ok', worker);
            })
            .catch(err => {
                log.error('sw error', err);
            });
    });
}
