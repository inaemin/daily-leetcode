/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer = nums[0];
    for (let i=1; i<nums.length; i++) {
        answer ^= nums[i];
    }
    return answer;
};