/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const arr = Array.from({length: n}, (_, i) => i+1);
    for (let i=1; i<=n-2; i++) {
        arr.push(n-i)
    }
    const len = arr.length;
    const r = time % len;
    
    return arr[r];    
};