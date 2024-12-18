/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const stack = [];
    const result = [];
    for (let i = nums.length * 2 - 1; i >= 0; i--) {
        const index = i % nums.length;
        while (nums[index] >= stack.at(-1)) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[index] = -1;
            stack.push(nums[index]);
        } else {
            result[index] = stack.at(-1);
            stack.push(nums[index]);
        }
    }
    return result;
};