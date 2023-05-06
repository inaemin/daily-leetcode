/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const mod = 10 ** 9 + 7;
    const pow = [1, 2];
    for (let i=2; i<nums.length; i++) {
        pow.push(pow[i-1] * 2 % mod)
    }

    let answer = 0;
    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            answer += pow[right-left];
            left += 1;
        } else {
            right -= 1;
        }
    }

    return answer % mod;
};