/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = 0;
    let one = 0;
    let two = nums.length - 1;
    while (one <= two) {
        if (nums[one] === 0) {
            let temp = nums[one];
            nums[one] = nums[zero];
            nums[zero] = temp;
            zero++;
            one++;
        } else if (nums[one] === 1) {
            one++;
        } else {
            let temp = nums[two]
            nums[two] = nums[one];
            nums[one] = temp;
            two--;
        }
    }
};