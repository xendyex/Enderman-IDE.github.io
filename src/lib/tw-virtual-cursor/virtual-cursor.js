import inactiveImage from './inactive.png';
import activeImage from './active.png';

let root = null;

const cursorContainer = document.createElement('div');
cursorContainer.style.userSelect = 'none';
cursorContainer.style.pointerEvents = 'none';
const cursorImg = document.createElement('img');
cursorImg.style.display = 'block';
cursorImg.style.transform = 'translate(-50%, -50%)';
cursorContainer.appendChild(cursorImg);

const inject = el => {
    root = el;
    root.appendChild(cursorContainer);
    root.style.position = 'absolute';
    root.style.top = '0';
    root.style.left = '0';
    setDown(false);
    setXY(0, 0);
};

const ref = el => {
    if (el) {
        inject(el);
    }
};

const setDown = down => {
    if (!root) {
        return;
    }
    root.style.display = '';
    if (down) {
        cursorImg.src = activeImage;
    } else {
        cursorImg.src = inactiveImage;
    }
};

const setXY = (x, y) => {
    if (!root) {
        return;
    }
    root.style.display = '';
    const stageX = 240 + x;
    const stageY = 180 - y;
    root.style.transform = `translate(${stageX}px, ${stageY}px)`;
};

const hide = () => {
    if (!root) {
        return;
    }
    root.style.display = 'none';
};

export {
    ref,
    hide,
    setDown,
    setXY
};
