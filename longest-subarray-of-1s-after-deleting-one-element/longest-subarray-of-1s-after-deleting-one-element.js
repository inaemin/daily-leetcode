/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const arr = nums.join("").split("0").map(el => el.length);
    if (arr.length === 1) return arr[0] - 1;
    let answer = 0;
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] + arr[i+1] > answer) {
            answer = arr[i] + arr[i+1];
        }
    }
    return answer;
};