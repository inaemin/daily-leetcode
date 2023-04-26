/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const result = [nums[0]];
    for (let i=1; i<nums.length; i++) {
        let p = Math.max(result[i-1] + nums[i], nums[i]);
        result.push(p);
    }

    return Math.max(...result);
};