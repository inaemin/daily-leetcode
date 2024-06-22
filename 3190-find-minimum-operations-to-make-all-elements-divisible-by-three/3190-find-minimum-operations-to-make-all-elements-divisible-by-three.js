/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce((a, e) => {
        if (e % 3 !== 0) a++;
        return a;
    }, 0)
};