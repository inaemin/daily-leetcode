/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // using recursion
    // const result = []
    // const bt = (arr, idx) => {
    //     if (idx === nums.length) {
    //         result.push([...arr]);
    //         return;
    //     }
    //     arr.push(nums[idx]);
    //     bt(arr, idx+1);
    //     arr.pop();
    //     bt(arr, idx+1);
    // }

    // bt([], 0) // currentLetter, nextIdx
    
    // return result;

    // using iteration -> doesn't have stackoverflow problem.
    const result = [[]];
    for (let i=0; i<nums.length; i++) {
        const n = nums[i];
        const len = result.length;
        for (let j=0; j<len; j++) {
            result.push([...result[j], n])
        }
    }

    return result;
};