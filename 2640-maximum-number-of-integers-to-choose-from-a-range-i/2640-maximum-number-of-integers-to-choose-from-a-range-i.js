/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let count = 0;
    let i=1;
    let sum = 0;
    const set = new Set([...banned.filter(el => el <= n)]);
    while (i <= n) {
        if (set.has(i)) {
            i++;
        } else if (sum + i <= maxSum) {
            sum += i;
            count++;
            i++;
        } else {
            break;
        }
    }
    return count;
};