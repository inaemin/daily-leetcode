/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a, b) => a - b);
    if (nums.length !== nums[nums.length-1] + 1) return false;
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] !== i+1) return false;
    }
    return true;
};