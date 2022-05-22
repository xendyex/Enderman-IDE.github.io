import React from 'react';
import GUI from '../containers/gui.jsx';
import './scratch-base.css';

const searchParams = new URLSearchParams(location.search);
const cloudHost = searchParams.get('cloud_host') || 'wss://clouddata.turbowarp.org';

const RenderGUI = props => (
    <GUI
        cloudHost={cloudHost}
        canSave={false}
        canEditTitle
        enableCommunity
        {...props}
    />
);

export default RenderGUI;
