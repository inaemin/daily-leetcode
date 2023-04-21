/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // using recursion
    const result = []
    const bt = (arr, idx) => {
        if (idx === nums.length) {
            result.push([...arr]);
            return;
        }
        arr.push(nums[idx]);
        bt(arr, idx+1);
        arr.pop();
        bt(arr, idx+1);
    }

    bt([], 0) // currentLetter, nextIdx

    return result;

    // using iteration
};