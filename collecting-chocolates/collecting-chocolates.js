/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minCost = function(nums, x) {
    let answer = nums.reduce((r, e) => r + e, 0);
    const result = [...nums];
    for (let i=1; i<nums.length; i++) {
        const cost = i * x;
        nums.unshift(nums.pop()); // 맨 마지막 원소를 앞으로.
        for (let j=0; j<result.length; j++) {
            result[j] = Math.min(result[j], nums[j])
        }
        answer = Math.min(answer, cost + result.reduce((r, e) => r + e, 0));
    }

    return answer;
};