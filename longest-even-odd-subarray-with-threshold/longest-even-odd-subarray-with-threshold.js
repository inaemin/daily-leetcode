/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    const n = nums.length;
    let answer = 0;
    for (let i=0; i<n; i++) {
        if (nums[i] > threshold) continue;
        if (nums[i] % 2 === 0) {
            let cnt = 1;
            for (let j=1; j<n-i; j++) {
                if (nums[i+j] > threshold) break;
                if (j%2 === 0 && nums[i+j]%2 === 0 || j%2 === 1 && nums[i+j]%2 === 1) cnt++
                else break;
            }
            answer = Math.max(answer, cnt);
        }
    }
    return answer;
};