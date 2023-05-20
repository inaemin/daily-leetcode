/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let cache
    let timer
    return function throttled(...args) {
        cache = args;
        if (timer) return;
        fn(...cache);
        cache = null;
        timer = setTimeout(() => {
            timer = null;
            if (cache) throttled(...cache);
        }, t)
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */