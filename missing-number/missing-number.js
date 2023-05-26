/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    /*
    nums에 있는 모든 element들을 XOR해주고,
    0-n까지의 숫자를 XOR해주면
    짝이 안 맞는 숫자 하나만 남는 원리.
     */
    const n = nums.length;
    let answer = n;
    for (let i=0; i<n; i++) {
        answer ^= nums[i];
        answer ^= i;
    }
    return answer;
};