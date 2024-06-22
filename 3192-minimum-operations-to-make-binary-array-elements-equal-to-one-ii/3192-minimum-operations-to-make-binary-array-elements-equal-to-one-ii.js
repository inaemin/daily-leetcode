/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let flip = 0;
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] === 0 && nums[i+1] === 1) {
            flip += 2;
        }
    }
    if (nums[nums.length-1] === 0) {
        flip++;
    }
    return flip;
};