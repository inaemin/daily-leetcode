/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0;
    const bt = (idx, sum=0) => {
        if (idx === nums.length - 1) {
            if (sum + nums[idx] === target) {
                count++;
            }
            if (sum - nums[idx] === target) {
                count++;
            }
            return;
        }

        bt(idx + 1, sum + nums[idx]);

        bt(idx + 1, sum - nums[idx])
    }
    bt(0);

    return count;
};