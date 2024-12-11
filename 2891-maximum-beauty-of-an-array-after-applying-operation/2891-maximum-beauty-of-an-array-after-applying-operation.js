/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a, b) => a - b);

    const subarray = [nums[0]];
    let maxLength = 1;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] - subarray[0] <= 2*k) {
            subarray.push(nums[i]);
            maxLength = Math.max(maxLength, subarray.length);
        } else {
            subarray.shift();
            subarray.push(nums[i]);
        }
    }

    return maxLength;
};