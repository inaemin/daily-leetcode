/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min_n = nums[0];
    const diff = [];
    for (let i=1; i<nums.length; i++) {
        if (nums[i] >= min_n) {
            diff.push(nums[i] - min_n);
        } else {
            min_n = nums[i];
            diff.push(null);
        }
    }
    return Math.max(...diff) || -1;
};