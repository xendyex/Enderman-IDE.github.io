const assertNotUndefined = v => {
    if (typeof v === 'undefined') {
        throw new Error('Undefined value');
    }
    return v;
};

const __PACKAGER__ = window.__PACKAGER__;

const options = {
    init: {
        projectData: assertNotUndefined(__PACKAGER__.projectData),
        handleVmInit: assertNotUndefined(__PACKAGER__.handleVmInit),
        handleProjectLoaded: assertNotUndefined(__PACKAGER__.handleProjectLoaded)
    },
    cloud: {
        id: assertNotUndefined(__PACKAGER__.id),
        host: assertNotUndefined(__PACKAGER__.cloudHost)
    },
    user: {
        username: assertNotUndefined(__PACKAGER__.username)
    },
    stageSize: {
        width: assertNotUndefined(__PACKAGER__.stageWidth),
        height: assertNotUndefined(__PACKAGER__.stageHeight)
    },
    noControls: assertNotUndefined(__PACKAGER__.noControls)
};

window.__PACKAGER__ = null;

if (options.noControls) {
    document.body.setAttribute('no-controls', '');
}

export default options;
