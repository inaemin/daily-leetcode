/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    const arr = [];
    return function() {
        arr.length ? arr.push(arr[arr.length-1] + 1) : arr.push(n);
        return arr[arr.length - 1];
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */