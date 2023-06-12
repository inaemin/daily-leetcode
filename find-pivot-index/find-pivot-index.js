/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((r, e) => r+e, 0);
    let left_sum = 0;
    for (let i=0; i<nums.length; i++) {
        total -= nums[i]
        if (left_sum === total) return i;
        else left_sum += nums[i];
    }
    return -1;
};