/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    // linear time with constant space
    const arr = Array.from({length: n}, (_, i) => i+1);
    while (arr.length > 1) {
        for (let i=0; i<k; i++) {
            if (i !== k-1) {
                arr.push(arr.shift())
            } else {
                arr.shift()
            }
        }
    }
    return arr[0];
};