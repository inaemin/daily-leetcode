/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    // AB 앞에는 AB 또는 BB, 뒤에는 AA 또는 AB
    // AA 앞은 AB 또는 BB, 뒤에는 무조건 BB
    // BB 앞은 무조건 AA, 뒤에는 AB 또는 AA
    if (x !== y) return Math.min(x, y)*2*2 + 2 + z*2
    if (x === y) return x*2*2 + z*2
};