/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i=0, j=0, k=nums.length-1;
    while (j <= k) {
        if (nums[j] === 0 && i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            continue;
        } else if (nums[j] === 2 && j <= k) {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            k--;
            continue;
        }
        j++;
    }
};