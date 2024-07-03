/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    nums.sort((a, b) => a - b);
    if (nums.length < 5) return 0;
    
    const case1 = nums[nums.length-4] - nums[0]
    const case2 = nums[nums.length-3] - nums[1]
    const case3 = nums[nums.length-2] - nums[2]
    const case4 = nums[nums.length-1] - nums[3]

    return Math.min(case1, case2, case3, case4);
};