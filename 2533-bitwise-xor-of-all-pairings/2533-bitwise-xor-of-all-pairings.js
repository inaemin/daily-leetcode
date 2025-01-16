/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let answer = 0;
    for (let i=0; i<nums1.length; i++) {
        if (nums2.length % 2 === 1) {
            answer ^= nums1[i];
        }
    }
    for (let j=0; j<nums2.length; j++) {
        if (nums1.length % 2 === 1) {
            answer ^= nums2[j];
        }
    }
    return answer;
};