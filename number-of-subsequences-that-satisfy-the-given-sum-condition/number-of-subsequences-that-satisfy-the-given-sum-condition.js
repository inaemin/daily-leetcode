/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var numSubseq = function(nums, target) {
    const mod = BigInt(10 ** 9 + 7);
    let answer = BigInt(0);
    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            answer += BigInt(2) ** BigInt(right - left) % mod;
            left += 1;
        } else {
            right -= 1;
        }
    }

    return answer % mod;
};