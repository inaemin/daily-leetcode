/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    nums.forEach(el => el.sort((a, b) => a - b));
    let answer = 0;
    while (nums[0].length) {
        let max = 0;
        for (let num of nums) max = Math.max(max, num.pop());
        answer += max;
    }
    
    return answer;
};