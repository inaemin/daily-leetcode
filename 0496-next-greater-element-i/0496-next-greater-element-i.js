/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const result = [];
    for (let i=nums2.length-1; i>=0; i--) {
        while (stack.at(-1) <= nums2[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = -1;
            stack.push(nums2[i]);
        } else {
            result[i] = stack.at(-1);
            stack.push(nums2[i]);
        }
    }
    for (let i=0; i<nums1.length; i++) {
        const idx = nums2.indexOf(nums1[i]);
        nums1[i] = result[idx];
    }
    return nums1;
};