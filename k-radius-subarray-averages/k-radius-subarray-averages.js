/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    if (k === 0) return nums;
    const n = nums.length;
    const result = Array(n).fill(-1);
    let sum = 0;
    for (let i=0; i<n; i++) {
        sum += nums[i];
        if (i < 2*k) continue;
        else if (i === 2*k) result[i-k] = sum / (2*k+1) | 0;
        else if (i > 2*k) {
            sum -= nums[i-2*k-1];
            result[i-k] = sum / (2*k+1) | 0;
        }
    }

    return result;
};