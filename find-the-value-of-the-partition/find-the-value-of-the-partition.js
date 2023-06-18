/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort((a, b) => a - b);
    let diff = Infinity;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] - nums[i-1] < diff) diff = nums[i] - nums[i-1];
    }
    return diff;
};