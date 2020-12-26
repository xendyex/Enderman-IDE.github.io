import styles from './touchlib.css';
import arrowImage from './arrow.svg';

const intersects = (a, b) => (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
);

class Gesture {
    /**
     * @param {TouchLib} touchLib Parent TouchLib instance.
     */
    constructor (touchLib) {
        this.touchLib = touchLib;
        this.region = null;

        this.x = 0;
        this.y = 0;

        this.dot = document.createElement('div');
        this.dot.className = styles.dot;
        this.touchLib.root.appendChild(this.dot);
    }

    updateRegion () {
        if (this.region) {
            this.region.disconnect(this);
            this.region = null;
        }

        const dotRect = this.dot.getBoundingClientRect();
        for (const region of this.touchLib.regions) {
            if (intersects(dotRect, region)) {
                region.connect(this);
                this.region = region;
                break;
            }
        }
    }

    move (x, y) {
        this.x = x;
        this.y = y;
        this.dot.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        this.updateRegion();
    }

    end () {
        if (this.region) {
            this.region.disconnect(this);
        }
        this.dot.remove();
    }

    cancel () {
        this.end();
    }
}

class Region {
    constructor (el, keys) {
        this.el = el;
        this.keys = keys;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.gestures = new Set();
    }

    connect (gesture) {
        this.gestures.add(gesture);
        this.el.setAttribute('active', 'true');
    }
    
    disconnect (gesture) {
        this.gestures.delete(gesture);
        if (this.gestures.size === 0) {
            this.el.removeAttribute('active');
        }
    }
}

class TouchLib extends EventTarget {
    constructor () {
        super();

        /** @type {Map<number, Gesture>} */
        this.gestures = new Map();
        this.oldKeys = new Set();

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTouchCancel = this.handleTouchCancel.bind(this);
        this.setupRegions = this.setupRegions.bind(this);
        this.update = this.update.bind(this);

        this.root = document.createElement('div');
        this.root.className = styles.root;
        
        this.root.addEventListener('touchstart', this.handleTouchStart);
        this.root.addEventListener('touchmove', this.handleTouchMove);
        this.root.addEventListener('touchend', this.handleTouchEnd);
        this.root.addEventListener('touchcancel', this.handleTouchCancel);

        this.dpadContainer = document.createElement('div');
        this.dpadContainer.className = styles.dpadContainer;

        this.regions = [
            this.createDpadButton('up', ['ArrowUp']),
            this.createDpadButton('down', ['ArrowDown']),
            this.createDpadButton('left', ['ArrowLeft']),
            this.createDpadButton('right', ['ArrowRight'])
        ];

        this.root.appendChild(this.dpadContainer);
        document.body.appendChild(this.root);

        this.setupRegions();
        window.addEventListener('resize', this.setupRegions);

        requestAnimationFrame(this.update);
    }

    setupRegions () {
        for (const region of this.regions) {
            const rect = region.el.getBoundingClientRect();
            region.x = rect.x;
            region.y = rect.y;
            region.width = rect.width;
            region.height = rect.height;
        }
    }

    createDpadButton (button, keys) {
        const el = document.createElement('img');
        el.className = styles.dpadButton;
        el.setAttribute('button', button);
        el.src = arrowImage;
        el.draggable = false;
        this.dpadContainer.appendChild(el);
        return new Region(el, keys);
    }

    update () {
        requestAnimationFrame(this.update);

        const keys = new Set();
        for (const gesture of this.gestures.values()) {
            const region = gesture.region;
            if (region) {
                for (const key of region.keys) {
                    keys.add(key);
                }
            }
        }

        for (const key of keys) {
            if (!this.oldKeys.has(key)) {
                this.dispatchKey(key, true);
            }
        }
        for (const key of this.oldKeys) {
            if (!keys.has(key)) {
                this.dispatchKey(key, false);
            }
        }
        this.oldKeys = keys;
    }

    dispatchKey (key, pressed) {
        if (pressed) {
            this.dispatchEvent(new CustomEvent('keydown', {detail: key}));
        } else {
            this.dispatchEvent(new CustomEvent('keyup', {detail: key}));
        }
    }

    /**
     * @private
     * @param {TouchEvent} e Touch event.
     */
    handleTouchStart (e) {
        e.preventDefault();
        for (const touch of e.changedTouches) {
            const gesture = new Gesture(this);
            this.gestures.set(touch.identifier, gesture);
            const {clientX, clientY} = touch;
            gesture.move(clientX, clientY);
        }
    }

    /**
     * @private
     * @param {TouchEvent} e Touch event.
     */
    handleTouchMove (e) {
        e.preventDefault();
        for (const touch of e.changedTouches) {
            const gesture = this.gestures.get(touch.identifier);
            if (gesture) {
                const {clientX, clientY} = touch;
                gesture.move(clientX, clientY);
            }
        }
    }
    
    /**
     * @private
     * @param {TouchEvent} e Touch event.
     */
    handleTouchEnd (e) {
        e.preventDefault();
        for (const touch of e.changedTouches) {
            const gesture = this.gestures.get(touch.identifier);
            if (gesture) {
                gesture.end();
                this.gestures.delete(touch.identifier);
            }
        }
    }

    /**
     * @private
     * @param {TouchEvent} e Touch event.
     */
    handleTouchCancel (e) {
        e.preventDefault();
        for (const touch of e.changedTouches) {
            const gesture = this.gestures.get(touch.identifier);
            if (gesture) {
                gesture.cancel();
                this.gestures.delete(touch.identifier);
            }
        }
    }
}

export default TouchLib;
