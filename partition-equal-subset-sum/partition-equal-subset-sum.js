/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const total_sum = nums.reduce((r, e) => r + e, 0);
    if (total_sum % 2 === 1) return false;
    const m = nums.length+1;
    const n = total_sum/2 + 1;
    const dp = [...Array(m)].map(el => new Array(n).fill(false));
    for (let i=0; i<dp.length; i++) dp[i][0] = true;
    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            if (dp[i-1][j] === true) dp[i][j] = true;
            else if (nums[i-1] === j) dp[i][j] = true;
            else if (j >= nums[i-1] && dp[i-1][j-nums[i-1]] === true) dp[i][j] = true;
        }
    }

    return dp[m-1][n-1];
};