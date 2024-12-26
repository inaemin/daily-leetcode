/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const total = nums.reduce((a, b) => a + b, 0);

    // +가 필요한 숫자들의 집합을 P, -가 필요한 숫자들의 집합을 N이라고 할때,
    // P + N은 total이 되어야 하고, P - N은 target이 되어야 한다.
    // 따라서 2P = total + target이고, P = (total + target) / 2가 됨.
    // total + target은 무조건 짝수가 되어야 함.
    if (Math.abs(target) > total || (target + total) % 2 !== 0) {
        return 0;
    }

    const P = (total + target) / 2;
    const dp = new Array(P+1).fill(0);
    dp[0] = 1; // 합이 0인 경우는 공집합이므로 1가지

    for (let num of nums) {
        for (let i=P; i>=num; i--) {
            dp[i] += dp[i-num];
        }
    }

    return dp[P];
};