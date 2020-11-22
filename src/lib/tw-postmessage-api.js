const VERSION = 0;

let vm;

const postMessageToParent = message => {
    window.parent.postMessage(message, '*');
};

const handleMessage = e => {
    const data = e.data;
    const type = data.type;

    switch (type) {
    case 'set':
    case 'get': {
        const name = data.name;
        const stage = vm.runtime.getTargetForStage();
        const variable = stage.lookupVariableByNameAndType(name, '');
        if (type === 'set') {
            variable.value = data.value;
        } else {
            postMessageToParent({
                type: 'respond_to_get',
                name,
                value: variable.value
            });
        }
        break;
    }
    }
};

const setupPostMessageAPI = _vm => {
    if (window.parent === window) {
        return;
    }
    vm = _vm;

    window.addEventListener('message', handleMessage);

    vm.on('PROJECT_STARTED', () => {
        postMessageToParent({
            type: 'started'
        });
    });

    postMessageToParent({
        type: 'setup',
        version: VERSION
    });
};

export default setupPostMessageAPI;
