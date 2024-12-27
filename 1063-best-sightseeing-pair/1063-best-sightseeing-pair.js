/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    // values[i] + values[j] + i - j
    // (values[i] + i) + (values[j] - j)
    const dp = values.map((el, idx) => ([el+idx, el-idx]));
    let max_i = dp[0][0];
    let max_sum = max_i + dp[1][1];
    for (let k=1; k<dp.length; k++) {
        max_sum = Math.max(max_sum, max_i + dp[k][1]);
        max_i = Math.max(max_i, dp[k][0]);
    }
    return max_sum;
};