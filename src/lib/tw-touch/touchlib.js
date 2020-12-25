import styles from './touchlib.css';

const JOYSTICK_TOLERANCE = 25;

class Gesture {
    /**
     * @param {TouchLib} touchLib Parent TouchLib instance.
     */
    constructor (touchLib) {
        this.touchLib = touchLib;
        this.intent = [];

        this.x = 0;
        this.y = 0;

        this.dotContainer = document.createElement('div');
        this.dotContainer.className = styles.dotContainer;

        this.dot = document.createElement('div');
        this.dot.className = styles.dot;

        this.dotContainer.appendChild(this.dot);
        this.touchLib.circle.appendChild(this.dotContainer);
    }

    update () {
        return this.intent;
    }

    updateIntent () {
        this.intent = [];

        if (this.x > JOYSTICK_TOLERANCE) {
            this.intent.push('ArrowRight');
        } else if (this.x < -JOYSTICK_TOLERANCE) {
            this.intent.push('ArrowLeft');
        }

        // Positive y is down
        if (this.y > JOYSTICK_TOLERANCE) {
            this.intent.push('ArrowDown');
        } else if (this.y < -JOYSTICK_TOLERANCE) {
            this.intent.push('ArrowUp');
        }
    }

    move (x, y) {
        this.x = x;
        this.y = y;
        this.dot.style.transform = `translate(${x}px, ${y}px)`;
        this.updateIntent();
    }

    end () {
        this.dotContainer.remove();
    }

    cancel () {
        this.end();
    }
}

class TouchLib extends EventTarget {
    constructor () {
        super();

        /** @type {Map<number, Gesture>} */
        this.gestures = new Map();
        this.oldIntents = new Set();

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTouchCancel = this.handleTouchCancel.bind(this);
        this.update = this.update.bind(this);

        this.root = document.createElement('div');
        this.root.className = styles.root;

        this.circle = document.createElement('div');
        this.circle.className = styles.circle;

        this.circle.addEventListener('touchstart', this.handleTouchStart);
        this.circle.addEventListener('touchmove', this.handleTouchMove);
        this.circle.addEventListener('touchend', this.handleTouchEnd);
        this.circle.addEventListener('touchcancel', this.handleTouchCancel);

        this.root.appendChild(this.circle);
        document.body.appendChild(this.root);

        this.rootRect = this.root.getBoundingClientRect();
        this.rootCenter = {
            x: this.rootRect.x + (this.rootRect.width / 2),
            y: this.rootRect.y + (this.rootRect.height / 2)
        };

        requestAnimationFrame(this.update);
    }
    
    update () {
        requestAnimationFrame(this.update);

        const intents = new Set();
        for (const gesture of this.gestures.values()) {
            const intent = gesture.update();
            for (const i of intent) {
                intents.add(i);
            }
        }

        for (const key of intents) {
            if (!this.oldIntents.has(key)) {
                this.dispatchKey(key, true);
            }
        }
        for (const key of this.oldIntents) {
            if (!intents.has(key)) {
                this.dispatchKey(key, false);
            }
        }
        this.oldIntents = intents;
    }

    dispatchKey (key, pressed) {
        if (pressed) {
            this.dispatchEvent(new CustomEvent('keydown', {detail: key}));
        } else {
            this.dispatchEvent(new CustomEvent('keyup', {detail: key}));
        }
    }

    /**
     * Get the position of a touch relative to the center of the circle.
     * Positive x is right, positive y is down (not up)
     * @param {Touch} touch The touch
     * @private
     * @returns {object} Position relative to center of the circle.
     */
    getTouchPosition (touch) {
        return {
            x: touch.clientX - this.rootCenter.x,
            y: touch.clientY - this.rootCenter.y
        };
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
            const {x, y} = this.getTouchPosition(touch);
            gesture.move(x, y);
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
                const {x, y} = this.getTouchPosition(touch);
                gesture.move(x, y);
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
