const __PACKAGER__ = window.__PACKAGER__;

const options = {
    init: {
        id: __PACKAGER__.id,
        projectData: __PACKAGER__.projectData,
        handleVmInit: __PACKAGER__.handleVmInit
    },
    user: {
        username: __PACKAGER__.username
    },
    stageSize: {
        width: __PACKAGER__.stageWidth,
        height: __PACKAGER__.stageHeight
    }
};

window.__PACKAGER__ = null;

export default options;
