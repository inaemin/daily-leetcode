/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    // dp문제
    // 점화식 dp[n] = Math.min(dp[n-1] + costs[0], dp[n-7] + costs[1], dp[n-30] + costs[2])
    const dp = new Array(366).fill(0);
    let p = 0;
    for (let d=1; d<366; d++) {
        if (d === days[p]) {
            dp[d] = Math.min(dp[d-1] + costs[0], (dp?.[d-7] || 0) + costs[1], (dp?.[d-30] || 0) + costs[2]);
            p++;
        } else {
            dp[d] = dp[d-1];
        }
    }

    return dp.at(-1);
};