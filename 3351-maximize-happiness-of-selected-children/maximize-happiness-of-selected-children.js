/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b - a);
    let ans = 0;
    for (let i=0; i<k; i++) {
        ans += happiness[i] - i < 0 ? 0 : happiness[i] - i;
    }
    return ans;
};