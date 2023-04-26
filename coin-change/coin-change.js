/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity)
    dp[0] = 0
    // set 1 at every coin.
    coins.forEach(el => {
        dp[el] = 1;
    })

    // F(n) = Math.min(F(n-2), F(n-3), F(n-5)) + 1;
    for (let i=1; i<=amount; i++) {
        let min = coins.map(el => dp[i-el]).filter(el => el !== undefined && el !== Infinity);
        if (min.length > 0) dp[i] = Math.min(...min) + 1;
    }
    console.log(dp);
    return dp[amount] === Infinity ? -1 : dp[amount];
};