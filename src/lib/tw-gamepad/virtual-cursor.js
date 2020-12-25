import inactiveImage from './inactive.png';
import activeImage from './active.png';

let root = null;
let injected = false;
let cursorContainer = null;
let cursorImg = null;

const inject = () => {
    if (!root) {
        return;
    }
    if (!cursorContainer) {
        cursorContainer = document.createElement('div');
        cursorContainer.style.userSelect = 'none';
        cursorContainer.style.pointerEvents = 'none';
        cursorContainer.style.willChange = 'transform';
    }
    if (!cursorImg) {
        cursorImg = document.createElement('img');
        cursorImg.src = inactiveImage;
        cursorImg.style.display = 'block';
        cursorImg.style.transform = 'translate(-50%, -50%)';
        cursorImg.style.imageRendering = 'optimizeSpeed';
        cursorImg.style.imageRendering = 'crisp-edges';
        cursorImg.style.imageRendering = 'pixelated';
        cursorContainer.appendChild(cursorImg);
    }
    root.appendChild(cursorContainer);
    root.style.position = 'absolute';
    root.style.top = '0';
    root.style.left = '0';
    injected = true;
};

const injectIfMissing = () => {
    if (!injected) {
        inject();
    }
};

const makeVisible = () => {
    injectIfMissing();
    root.hidden = false;
};

const ref = el => {
    if (root) {
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
    }
    root = el;
    injected = false;
};

const setDown = down => {
    makeVisible();
    if (down) {
        cursorImg.src = activeImage;
    } else {
        cursorImg.src = inactiveImage;
    }
};

const setXY = (x, y) => {
    makeVisible();
    const stageX = 240 + x;
    const stageY = 180 - y;
    cursorContainer.style.transform = `translate(${stageX}px, ${stageY}px)`;
};

const hide = () => {
    if (!root) {
        return;
    }
    root.hidden = true;
};

export {
    ref,
    hide,
    setDown,
    setXY
};
