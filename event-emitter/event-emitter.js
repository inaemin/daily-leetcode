class EventEmitter {
    constructor() {
        this.map = new Map();
    }
    
    subscribe(event, cb) {
        if (this.map.has(event)) this.map.set(event, [...this.map.get(event), cb]);
        else this.map.set(event, [cb]);
        return {
            unsubscribe: () => {
                this.map.set(event, this.map.get(event).slice(1));
            }
        };
    }

    emit(event, args = []) {
        const cb = this.map.get(event);
        if (cb) return cb.reduce((res, ele) => [...res, ele(...args)], [])
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