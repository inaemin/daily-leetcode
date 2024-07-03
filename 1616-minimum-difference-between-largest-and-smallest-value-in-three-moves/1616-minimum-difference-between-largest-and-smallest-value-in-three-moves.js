/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    const n = nums.length
    nums.sort((a, b) => a - b);
    if (nums.length < 5) return 0;
    
    const case1 = nums[n-4] - nums[0]
    const case2 = nums[n-3] - nums[1]
    const case3 = nums[n-2] - nums[2]
    const case4 = nums[n-1] - nums[3]

    return Math.min(case1, case2, case3, case4);
};