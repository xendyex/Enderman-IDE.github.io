import ReactDOM from 'react-dom';
import React from 'react';
import {compose} from 'redux';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import TWFullScreenHOC from '../lib/tw-embed-fullscreen-hoc.jsx';
import TWFullscreenResizerHOC from '../lib/tw-fullscreen-resizer-hoc.jsx';
import TWStateManagerHOC from '../lib/tw-state-manager-hoc.jsx';
import TWPackagerHOC from './tw-packager-hoc.jsx';
import ErrorBoundaryHOC from '../lib/error-boundary-hoc.jsx';

import GUI from './render-gui.jsx';

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
document.body.classList.add('tw-loaded');

try {
    history.replaceState('', '', location.pathname);
} catch (e) {}

const WrappedGUI = compose(
    AppStateHOC,
    ErrorBoundaryHOC('Packager'),
    TWStateManagerHOC,
    TWFullscreenResizerHOC,
    TWFullScreenHOC,
    TWPackagerHOC
)(GUI);

ReactDOM.render(<WrappedGUI
    isEmbedded
    routingStyle={"none"}
/>, appTarget);
