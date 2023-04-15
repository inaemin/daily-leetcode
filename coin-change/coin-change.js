/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const res = Array(amount+1).fill(-1);
    res[0] = 0;
    for (let coin of coins) {
        res[coin] = 1;
    }
    
    for (let i=1; i<=amount; i++) {
        if (res[i] !== -1) continue;
        else {
            const cand = coins.map(el => {
                if (res[i-el] === undefined) return -1;
                return res[i-el];
            }).filter(el => el !== -1)
            if (cand.length) {
                res[i] = Math.min(...cand) + 1;
            }
        }
    }

    return res[amount];
};