/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const new_nums = nums.map(el => el % 2);
    let all_odd = 0
    let all_double = 0
    for (let num of new_nums) {
        if (num === 0) {
            all_double++;
        } else {
            all_odd++;
        }
    }
    let odd_start = 0;
    let double_start = 0;
    let odd_start_idx = new_nums.findIndex(el => el === 1);
    let double_start_idx = new_nums.findIndex(el => el === 0);
    let next = 1;
    for (let i=odd_start_idx; i<new_nums.length; i++) {
        if (next === new_nums[i]) {
            next ^= 1;
            odd_start++;
        }
    }
    next = 0;
    for (let i=double_start_idx; i<new_nums.length; i++) {
        if (next === new_nums[i]) {
            next ^= 1;
            double_start++;
        }
    } 
    return Math.max(all_odd, all_double, odd_start, double_start)
};