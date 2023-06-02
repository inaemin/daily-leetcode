class EventEmitter {
    constructor() {
        this.map = {};
    }

    subscribe(event, cb) {
        if (this.map[event]) this.map[event].push(cb);
        else this.map[event] = [cb]
        return {
            unsubscribe: () => {
                this.map[event].shift();
            }
        };
    }

    emit(event, args = []) {
        const cb = this.map[event];
        if (cb) return cb.map(el => el(...args));
        return [];
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */