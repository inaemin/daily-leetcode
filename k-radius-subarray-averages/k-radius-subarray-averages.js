/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    if (k === 0) return nums;
    const result = Array(nums.length).fill(-1);
    if (2*k+1 > nums.length) return result; // 최소개수가 nums 길이보다 크다면
    const window = [...nums.slice(0, 2*k+1)];
    let sum = window.reduce((r, e) => r + e, 0);
    result[k] = sum / (2*k+1) | 0;
    for (let i=2*k+1; i<nums.length; i++) {
        window.push(nums[i]);
        sum += nums[i];
        sum -= window.shift();
        result[i-k] = sum / (2*k+1) | 0;
    }

    return result;
};