/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let minPatch = 0;
    let maxSum = 0;
    let i = 0;
    while (maxSum < n) {
        if (i < nums.length) {
            if (maxSum + 1 < nums[i]) {
                minPatch++;
                maxSum += maxSum + 1;
            } else {
                maxSum += nums[i]
                i++;
            }
        } else {
            if (maxSum < n) {
                minPatch++;
                maxSum += maxSum + 1;
            }
        }
    }
    return minPatch;
};