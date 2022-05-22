const runAddons = () => {
    import(/* webpackChunkName: "addons-api" */ './api');
};

export default runAddons;
