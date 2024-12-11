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
        if (nums[i] - nums[start] <= 2*k) {
            end = i;
            maxLength = Math.max(maxLength, end - start + 1);
        } else {
            while (nums[i] - nums[start] > 2*k)
                start++;
            end = i;
        }
    }

    return maxLength;
};