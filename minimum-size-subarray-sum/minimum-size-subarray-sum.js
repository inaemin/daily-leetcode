/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let answer = Infinity
    let i=0;
    let j=0;
    let total = 0;
    while (j < nums.length) {
        total += nums[j];
        while (total >= target) {
            answer = Math.min(answer, j-i+1);
            total -= nums[i];
            i++
        }
        j++
    }
    return answer === Infinity ? 0 : answer;
};