/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let cnt = 0;
    amount = amount.filter(el => el !== 0);
    while (amount.length) {
        amount.sort((a, b) => b - a);
        if (amount.length === 1) {
            cnt += amount[0];
            return cnt;
        }
        amount[0]--;
        amount[1]--;
        cnt++;
        amount = amount.filter(el => el !== 0);
    }
    return cnt;
};