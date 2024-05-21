/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // recursion
    const result = []
    const bt = (start, subset=[]) => {
        if (start === nums.length) {
            result.push(subset);
            return;
        }
        bt(start + 1, [...subset, nums[start]])
        bt(start + 1, subset)
        
        return result;
    }

    return bt(0);

    // iteration
};