/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const arr = [...nums, k].sort((a, b) => b - a);
    let count = 0;
    for (let i=1; i<arr.length; i++) {
        if (arr[i-1] === arr[i])
            continue;
        count++;
    }

    return arr.at(-1) === k ? count : -1;    
};