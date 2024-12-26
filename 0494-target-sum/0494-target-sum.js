/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = {};
    const bt = (idx, sum=0) => {
        const key = `${idx},${sum}`;
        if (key in memo) {
            return memo[key];
        }
        if (idx === nums.length) {
            return sum === target ? 1 : 0;
        }

        const add = bt(idx+1, sum + nums[idx]);
        const subtract = bt(idx+1, sum - nums[idx]);

        memo[key] = add + subtract;
        return memo[key];
    }

    return bt(0);
};