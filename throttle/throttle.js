/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timer;
    let memo = [];
    return function(...args) {
        if (!timer) {
            fn(...args);
            timer = setInterval(() => {
                if (memo.length) {
                    fn(...memo.pop())
                } else {
                    clearInterval(timer);
                    timer = null;
                }
            }, t);
        } else {
            memo = [args];
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */