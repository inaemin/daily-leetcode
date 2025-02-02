/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let prev_start_num = nums[0];
    let prev_num = nums[0];
    for (let i=1; i<nums.length; i++) {
        const num = nums[i];
        if (prev_num > num) {
            let prev_slice_num = num;
            for (let j=i; j<nums.length; j++) {
                if (nums[j] > prev_start_num || nums[j] < prev_slice_num ) return false;
                prev_slice_num = nums[j];
            }
            return true;
        }
        prev_num = num;
    }
    return true;
};