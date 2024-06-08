/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    const hash = {};
    for (let i=0; i<nums.length; i++) {
        sum = (sum + nums[i]) % k;
        if (i !== 0 && sum === 0) {
            return true
        } else if (hash.hasOwnProperty(sum) && i - hash[sum] > 1) {
            return true;
        } else if (!hash.hasOwnProperty(sum)) {
            hash[sum] = i;
        }
    }
    return false;
};