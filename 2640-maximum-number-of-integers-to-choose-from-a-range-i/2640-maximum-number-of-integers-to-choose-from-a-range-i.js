/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let count = 0;
    let pointer = 0;
    let i=1;
    let sum = 0;
    banned.sort((a, b) => a - b);
    while (i <= n) {
        if (banned[pointer] < i) {
            pointer++;
        } else if (banned[pointer] === i) {
            pointer++;
            i++;
        } else if (sum + i <= maxSum) {
            count++;
            sum += i;
            i++;
        } else {
            break;
        }
    }
    return count;
};