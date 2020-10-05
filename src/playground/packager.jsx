import ReactDOM from 'react-dom';
import React from 'react';
import {compose} from 'redux';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import TWFullScreenHOC from '../lib/tw-fullscreen-hoc.jsx';
import TWPackagerHOC from './tw-packager-hoc.jsx';
import ErrorBoundaryHOC from '../lib/error-boundary-hoc.jsx';

import GUI from './render-gui.jsx';

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
document.body.classList.add('tw-loaded');

const WrappedGUI = compose(
    AppStateHOC,
    ErrorBoundaryHOC('Packager'),
    TWFullScreenHOC,
    TWPackagerHOC
)(GUI);

ReactDOM.render(<WrappedGUI
    isEmbedded
/>, appTarget);
