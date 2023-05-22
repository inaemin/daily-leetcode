/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = {};
    nums.forEach((num) => {
        obj[num] = (obj[num] || 0) + 1;
    })
    
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, k);
};