import log from './log';

const OFF = 0;
const LOW = 1;
const HIGH = 2;

const controllers = {
    'Xbox 360 Controller (XInput STANDARD GAMEPAD)': {
        buttons: [
            {
                // A
                type: 'key',
                high: ' '
            }, {
                // B
                type: 'key',
                high: 'Escape'
            }, {
                // X
                type: 'key',
                high: 'E'
            }, {
                // Y
                type: 'key',
                high: 'E'
            }, {
                // LB
                type: 'none'
            }, {
                // RB
                type: 'none'
            }, {
                // LT
                type: 'mousedown'
            }, {
                // RT
                type: 'mousedown'
            }, {
                // Change view
                type: 'none'
            }, {
                // Menu
                type: 'key',
                high: 'P'
            }, {
                // Left analog press
                type: 'none'
            }, {
                // Right analog press
                type: 'none'
            }, {
                // D-pad up
                type: 'key',
                high: 'ArrowUp'
            }, {
                // D-pad down
                type: 'key',
                high: 'ArrowDown'
            }, {
                // D-pad left
                type: 'key',
                high: 'ArrowLeft'
            }, {
                // D-pad right
                type: 'key',
                high: 'ArrowRight'
            }, {
                // ????
                type: 'none'
            }
        ],
        axes: [
            {
                // Left analog stick left/right
                type: 'key',
                high: 'ArrowRight',
                low: 'ArrowLeft',
                deadZone: 0.5
            },
            {
                // Left analog stick up/down
                type: 'key',
                high: 'ArrowDown',
                low: 'ArrowUp',
                deadZone: 0.5
            },
            {
                // Right analog stick left/right
                type: 'virtual_cursor',
                high: '+x',
                low: '-x',
                sensitivity: 10,
                deadZone: 0.2
            },
            {
                // Right analog stick up/down
                type: 'virtual_cursor',
                high: '-y',
                low: '+y',
                sensitivity: 10,
                deadZone: 0.2
            }
        ]
    }
};

const transformAndCopyMapping = mapping => {
    const copy = Object.assign({}, mapping);
    if (copy.type === 'key') {
        copy._state = OFF;
        if (typeof copy.deadZone === 'undefined') {
            copy.deadZone = 0.5;
        }
    } else if (copy.type === 'mousedown') {
        copy._isDown = false;
        if (typeof copy.deadZone === 'undefined') {
            copy.deadZone = 0.5;
        }
    } else if (copy.type === 'virtual_cursor') {
        // no-op
    } else if (copy.type === 'none') {
        // no-op
    } else {
        log.warn('unknown mapping type', copy.type);
    }
    return copy;
};

class GamepadData {
    /** @param {Gamepad} gamepad Source Gamepad */
    constructor (gamepad) {
        this.id = gamepad.id;

        const controllerData = controllers[this.id];
        // Make copies of the mappings because these can be changed.
        this.buttonMappings = controllerData.buttons.map(i => transformAndCopyMapping(i));
        this.axesMappings = controllerData.axes.map(i => transformAndCopyMapping(i));
    }
}

class GamepadLib extends EventTarget {
    constructor () {
        super();

        /** @type {Map<string, GamepadData>} */
        this.gamepads = new Map();

        this.handleConnect = this.handleConnect.bind(this);
        this.handleDisconnect = this.handleDisconnect.bind(this);
        this.update = this.update.bind(this);

        this.virtualCursor = {
            x: 0,
            y: 0,
            maxX: Infinity,
            minX: -Infinity,
            maxY: Infinity,
            minY: -Infinity,
            modified: false
        };

        this.addEventHandlers();
    }

    addEventHandlers () {
        window.addEventListener('gamepadconnected', this.handleConnect);
        window.addEventListener('gamepaddisconnected', this.handleDisconnect);
    }
    
    removeEventHandlers () {
        window.removeEventListener('gamepadconnected', this.handleConnect);
        window.removeEventListener('gamepaddisconnected', this.handleDisconnect);
    }

    handleConnect (e) {
        const gamepad = e.gamepad;
        const id = gamepad.id;
        log.info('connected', gamepad);
        this.gamepads.set(id, new GamepadData(gamepad));
        requestAnimationFrame(this.update);
    }

    handleDisconnect (e) {
        const gamepad = e.gamepad;
        const id = gamepad.id;
        log.info('disconnected', gamepad);
        this.gamepads.delete(id);
        // TODO: cancel animation frame when no controllers connected
    }

    dispatchKey (key, pressed) {
        if (pressed) {
            this.dispatchEvent(new CustomEvent('keydown', {detail: key}));
        } else {
            this.dispatchEvent(new CustomEvent('keyup', {detail: key}));
        }
    }

    dispatchMouseDown (down) {
        if (down) {
            this.dispatchEvent(new CustomEvent('mousedown'));
        } else {
            this.dispatchEvent(new CustomEvent('mouseup'));
        }
    }

    dispatchMouseMove (x, y) {
        this.dispatchEvent(new CustomEvent('mousemove', {detail: {x, y}}));
    }

    updateButton (value, mapping) {
        if (mapping.type === 'key') {
            let state = OFF;
            if (value >= mapping.deadZone) state = HIGH;
            if (value <= -mapping.deadZone) state = LOW;

            const oldState = mapping._state;
            if (state !== oldState) {
                const pressKey = state === HIGH ? mapping.high : state === LOW ? mapping.low : null;
                const unpressKey = oldState === HIGH ? mapping.high : oldState === LOW ? mapping.low : null;
                if (pressKey) {
                    this.dispatchKey(pressKey, true);
                }
                if (unpressKey) {
                    this.dispatchKey(unpressKey, false);
                }
                mapping._state = state;
            }
        }

        if (mapping.type === 'mousedown') {
            const isDown = Math.abs(value) >= mapping.deadZone;
            const oldValue = mapping._isDown;
            if (isDown !== oldValue) {
                this.dispatchMouseDown(isDown);
                mapping._isDown = isDown;
            }
        }

        if (mapping.type === 'virtual_cursor') {
            const deadZone = mapping.deadZone;
            let state = OFF;
            if (value >= deadZone) state = HIGH;
            if (value <= -deadZone) state = LOW;

            const action = state === HIGH ? mapping.high : state === LOW ? mapping.low : null;
            const range = 1 - deadZone;
            const speed = ((Math.abs(value) - deadZone) / range) * mapping.sensitivity;
            if (action === '+x') {
                this.virtualCursor.x += speed;
                this.virtualCursor.modified = true;
            } else if (action === '-x') {
                this.virtualCursor.x -= speed;
                this.virtualCursor.modified = true;
            } else if (action === '+y') {
                this.virtualCursor.y += speed;
                this.virtualCursor.modified = true;
            } else if (action === '-y') {
                this.virtualCursor.y -= speed;
                this.virtualCursor.modified = true;
            }
        }
    }

    update () {
        requestAnimationFrame(this.update);
        const gamepads = navigator.getGamepads();

        for (const gamepad of gamepads) {
            if (gamepad === null) {
                continue;
            }

            const id = gamepad.id;
            const data = this.gamepads.get(id);

            for (let i = 0; i < gamepad.buttons.length; i++) {
                const button = gamepad.buttons[i];
                const value = button.value;
                const mapping = data.buttonMappings[i];
                this.updateButton(value, mapping);
            }

            for (let i = 0; i < gamepad.axes.length; i++) {
                const axis = gamepad.axes[i];
                const mapping = data.axesMappings[i];
                this.updateButton(axis, mapping);
            }
        }

        if (this.virtualCursor.modified) {
            this.virtualCursor.modified = false;
            if (this.virtualCursor.x > this.virtualCursor.maxX) {
                this.virtualCursor.x = this.virtualCursor.maxX;
            }
            if (this.virtualCursor.x < this.virtualCursor.minX) {
                this.virtualCursor.x = this.virtualCursor.minX;
            }
            if (this.virtualCursor.y > this.virtualCursor.maxY) {
                this.virtualCursor.y = this.virtualCursor.maxY;
            }
            if (this.virtualCursor.y < this.virtualCursor.minY) {
                this.virtualCursor.y = this.virtualCursor.minY;
            }
            this.dispatchMouseMove(this.virtualCursor.x, this.virtualCursor.y);
        }
    }
}

export default GamepadLib;
