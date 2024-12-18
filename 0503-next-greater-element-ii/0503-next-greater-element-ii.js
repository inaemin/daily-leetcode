/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const circular = [...nums, ...nums];
    const stack = [];
    for (let i = circular.length - 1; i >= 0; i--) {
        while (circular[i] >= stack.at(-1)) {
            stack.pop();
        }
        if (stack.length === 0) {
            nums[i % nums.length] = -1;
            stack.push(circular[i]);
        } else {
            nums[i % nums.length] = stack.at(-1);
            stack.push(circular[i]);
        }
    }
    return nums;
};