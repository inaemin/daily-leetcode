/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const res = [0,0];
    for (let i=2; i<=cost.length; i++) {
        res[i] = Math.min(res[i-2]+cost[i-2], res[i-1]+cost[i-1]);
    }

    return res.at(-1)
};