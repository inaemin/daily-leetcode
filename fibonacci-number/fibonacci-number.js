/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const fib = [0, 1];
    if (n < 2) return fib[n];
    for (let i=2; i<=n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib[n];
};