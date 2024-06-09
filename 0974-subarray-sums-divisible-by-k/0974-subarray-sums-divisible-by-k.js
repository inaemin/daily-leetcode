/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0;
    let sum = 0;
    const dividedByK = nums.reduce((a, e) => {
        sum = (sum + e) % k;
        if (sum < 0) sum += k;
        a[sum] = (a?.[sum] || 0) + 1;
        if (sum === 0) {
            count += a[sum];
        } else if (a[sum] > 1) {
            count += a[sum] - 1;
        }
        return a;
    }, {})

    return count;
};