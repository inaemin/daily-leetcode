/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const result = [[], []];
    const num1set = new Set(nums1);
    const num2set = new Set(nums2);
    num1set.forEach((el) => {
        if (!num2set.has(el)) result[0].push(el);
    })
    num2set.forEach((el) => {
        if (!num1set.has(el)) result[1].push(el);
    })
    return result;
};