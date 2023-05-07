/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const result = [];
    const prefix = new Set();
    const suffix = [...nums];
    nums.forEach((num, idx) => {
        prefix.add(num);
        suffix.shift();
        result.push(prefix.size - new Set(suffix).size);
    })
    
    return result;
};