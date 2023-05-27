/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n === 0 || n === 1) return 0;
    const arr = Array(n).fill(true);
    let cnt = 0;
    for (let i=2; i<n; i++) {
        if (arr[i] === true) {
            cnt += 1;
            for (let j=i; j<=Math.floor(n/i); j++) {
                arr[i*j] = false;
            }
        }
    }
    return cnt;
};