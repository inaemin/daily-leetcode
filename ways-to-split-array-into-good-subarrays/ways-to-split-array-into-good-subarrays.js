/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function(nums) {
    const mod = 10**9 + 7;
    let one_cnt = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 1) {
            one_cnt.push(i);
        }
    }
    if (one_cnt.length <= 1) return one_cnt.length;
    let answer = 1;
    for (let i=0; i<one_cnt.length-1; i++) {
        answer = answer * (one_cnt[i+1] - one_cnt[i]) % mod;
    }
    return answer;
};