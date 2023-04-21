/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // recursion
    const result = [];
    const bt = (subset, idx, rest) => {
        if (subset.length === nums.length) {
            result.push([...subset])
            return;
        }

        rest.forEach((fixed, i, o) => {
            subset.push(fixed);
            bt(subset, idx+1, o.filter(el => el !== fixed));
            subset.pop();
        })
    }

    bt([], 0, nums) //current, nextIdx
    return result;

    // iteration
};