/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const mod = 10**9 + 7;
    const dp = new Array(high).fill(0);
    dp[zero-1] += 1;
    dp[one-1] += 1;
    for (let i=Math.min(zero, one); i<high; i++) {
        dp[i] += (dp?.[i-zero] || 0) + (dp?.[i-one] || 0);
        dp[i] %= mod;
    }
    let sum = 0;
    for (let i=low-1; i<high; i++) {
        sum += dp[i];
        sum %= mod;
    }
    return sum;
};