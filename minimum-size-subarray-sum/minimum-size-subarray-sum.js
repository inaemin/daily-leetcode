/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let answer = Infinity
    let i=0;
    const subarr = [];
    let total = 0;
    while (i < nums.length) {
        if (total < target) {
            total += nums[i];
            subarr.push(nums[i]);
        }
        while (total >= target) {
            answer = Math.min(answer, subarr.length);
            total -= subarr.shift()
        }
        i++
    }
    return answer === Infinity ? 0 : answer;
};