/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const mod = 10**9 + 7;
    const dp = new Array(high+1).fill(0);
    dp[zero] += 1;
    dp[one] += 1;
    let sum = 0;
    for (let i=Math.min(zero, one); i<=high; i++) {
        dp[i] += (dp?.[i-zero] || 0) + (dp?.[i-one] || 0);
        dp[i] %= mod;
        if (i >= low && i <= high) {
            sum += dp[i];
            sum %= mod;
        }
    }
    return sum;
};