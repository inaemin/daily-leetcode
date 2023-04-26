/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let result = max;
    for (let i=1; i<nums.length; i++) {
        max =  Math.max(max + nums[i], nums[i]);
        if (max > result) result = max;
    }

    return result;
};