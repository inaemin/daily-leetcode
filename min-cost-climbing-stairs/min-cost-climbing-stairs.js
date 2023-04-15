/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const res = [cost[0], cost[1]];
    for (let i=2; i<cost.length; i++) {
        res[i] = Math.min(res[i-2]+cost[i], res[i-1]+cost[i]);
    }

    return Math.min(res.at(-1), res.at(-2));
};