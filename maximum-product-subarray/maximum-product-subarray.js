/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let result = max;
    for (let i=1; i<nums.length; i++) {
        let comparison = [nums[i], max*nums[i], min*nums[i]];
        max = Math.max(...comparison);
        min = Math.min(...comparison);
        if (result < max) result = max;
    }

    return result;
};