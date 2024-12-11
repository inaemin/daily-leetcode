/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a, b) => a - b);

    let start = 0;
    let end;
    let maxLength = 1;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] - nums[start] <= 2*k && i - start + 1 > maxLength) {
            end = i;
            maxLength = end - start + 1;
        } else {
            start++;
            end = i;
        }
    }

    return maxLength;
};