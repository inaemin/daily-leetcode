/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    const bt = (arr, idx) => {
        if (idx === nums.length) {
            result.push(arr);
            return;
        }
        bt(arr, idx+1);
        bt([...arr, nums[idx]], idx+1)
    }

    bt([], 0) // currentLetter, nextIdx

    return result;
};