/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    const result = [];
    return function() {
        if (result.length) {
            result.push(result[result.length-1] + 1);
        } else {
            result.push(n);
        }
        return result[result.length - 1]
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */