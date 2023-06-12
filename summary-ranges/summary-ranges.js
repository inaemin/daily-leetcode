/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let i=0, j=0;
    while (j < nums.length) {
        if (nums[j] + 1 === nums[j+1]) j++;
        else {
            if (i === j) result.push(`${nums[i]}`);
            else result.push(`${nums[i]}->${nums[j]}`);
            i = j+1;
            j = j+1;
        }
    }
    return result;
};