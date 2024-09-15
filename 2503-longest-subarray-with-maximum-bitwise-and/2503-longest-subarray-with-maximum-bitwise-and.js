/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let cnt = 0;
    let max = 0;
    let idx = 0;
    let max_cnt = 0;
    while (idx < nums.length) {
        if (nums[idx] > max) {
            max = nums[idx];
            cnt = 1;
            max_cnt = cnt;
        } else if (nums[idx] === max) {
            cnt++;
            max_cnt = Math.max(max_cnt, cnt);
        } else {
            max_cnt = Math.max(max_cnt, cnt);
            cnt = 0;
        }
        idx++;
    }

    return max_cnt;
};