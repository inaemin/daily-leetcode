/**
 * @param {Function} fn
 */
function memoize(fn) {
    const obj = new Map();
    return function(...args) {
        let key = args.join(",");
        if (obj.has(key)) return obj.get(key);
        else {
            obj.set(key, fn(...args));
            return obj.get(key)
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */