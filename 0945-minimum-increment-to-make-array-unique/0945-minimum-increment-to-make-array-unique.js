/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let moves = 0;
    let maxNum = nums[0]
    const set = new Set();
    nums.sort((a, b) => a - b);
    for (let i=0; i<nums.length; i++) {
        if (set.has(nums[i])) {
            maxNum += 1;
            set.add(maxNum);
            moves += maxNum - nums[i]
        } else {
            set.add(nums[i])
            maxNum = nums[i]
        }
    }
    return moves;
};