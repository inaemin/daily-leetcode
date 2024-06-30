/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
    const new_nums = nums.map(el => el % 2);
    const counter = [0, 0, 0, 0] // [odd, event, toggle]
    let toggle = new_nums[0];
    for (let num of new_nums) {
        if (num === 1) counter[0]++;
        else counter[1]++;
        if (num === toggle) {
            counter[2]++;
            toggle ^= 1;
        }
    }
    
    return Math.max(...counter);
};