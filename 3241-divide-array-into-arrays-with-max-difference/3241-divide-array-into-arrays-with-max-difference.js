/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);

    const answer = [];
    for (let i=0; i<nums.length; i+=3) {
        if (nums[i+2] - nums[i] > k) {
            return [];
        }
        const subarr = [];
        for (let j=i; j<i+3; j++) {
            subarr.push(nums[j]);
        }
        answer.push(subarr);
    }
    return answer;
};