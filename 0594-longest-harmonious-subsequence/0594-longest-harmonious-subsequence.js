/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const freq = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!freq.has(nums[i])) {
            freq.set(nums[i], 0);
        }
        freq.set(nums[i], freq.get(nums[i]) + 1);
    }

    let longest = 0;
    freq.forEach((value, key, map) => {
        if (freq.has(key + 1)) {
            longest = Math.max(longest, freq.get(key) + freq.get(key + 1))
        }
    })

    return longest;
};