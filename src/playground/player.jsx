import './import-first';

import ReactDOM from 'react-dom';
import React from 'react';
import {setAppElement} from 'react-modal';

import Playground from './playground.jsx';
import appTarget from './app-target';

setAppElement(appTarget);
ReactDOM.render(<Playground
    isPlayerOnly
/>, appTarget);
