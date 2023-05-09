/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const total_sum = nums.reduce((r, e) => r + e, 0);
    if (total_sum % 2 === 1) return false;
    const dp = Array(total_sum/2+1).fill(false);
    dp[0] = true;
    for (let num of nums) {
        for (let i=dp.length-1; i>=0; i--) {
            if (dp[i] === false && i >= num) {
                dp[i] = dp[i-num]
            }
        }
    }
    return dp[dp.length-1];
};