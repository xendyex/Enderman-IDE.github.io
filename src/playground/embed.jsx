import ReactDOM from 'react-dom';
import React from 'react';
import {compose} from 'redux';
import {setAppElement} from 'react-modal';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import TWEmbedFullScreenHOC from '../lib/tw-embed-fullscreen-hoc.jsx';
import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import runAddons from '../addons/entry';

import GUI from './render-gui.jsx';
import appTarget from './app-target';

const urlParams = new URLSearchParams(location.search);

let vm;
const onVmInit = _vm => {
    vm = _vm;
};

const onProjectLoaded = () => {
    if (urlParams.has('autoplay')) {
        vm.start();
        vm.greenFlag();
    }
};

const WrappedGUI = compose(
    AppStateHOC,
    HashParserHOC,
    TWEmbedFullScreenHOC
)(GUI);

setAppElement(appTarget);
ReactDOM.render(<WrappedGUI
    isEmbedded
    onVmInit={onVmInit}
    onProjectLoaded={onProjectLoaded}
/>, appTarget);

if (urlParams.has('addons')) {
    runAddons();
}
