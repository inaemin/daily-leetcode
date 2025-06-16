/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min_n = nums[0];
    let max_diff = -1;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] > min_n) {
            if (nums[i] - min_n > max_diff) {
                max_diff = nums[i] - min_n;
            }
        } else {
            min_n = nums[i];
        }
    }
    return max_diff;
};