/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0, end = 0;
    let sum = nums[0];
    let answer = Infinity;
    while (start < nums.length && end < nums.length) {
        if (sum >= target) {
            answer = Math.min(answer, end - start + 1);
            sum -= nums[start];
            start++;
        }
        else {
            end++;
            sum += nums[end];
        }
    }
    return answer === Infinity ? 0 : answer;
};