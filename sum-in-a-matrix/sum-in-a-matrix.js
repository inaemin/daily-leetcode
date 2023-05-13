/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    nums.forEach(el => el.sort((a, b) => a - b));
    let answer = 0;
    while (nums[0].length) {
        const cand = []
        for (let num of nums) cand.push(num.pop());
        answer += Math.max(...cand);
    }
    
    return answer;
};