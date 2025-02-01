/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let parity = nums[0] % 2;
    for (let i=1; i<nums.length; i++) {
        if (parity === nums[i] % 2) return false;
        parity = nums[i] % 2;
    }
    return true;
};