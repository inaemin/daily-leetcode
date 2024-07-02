/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const arr1 = nums1.length < nums2.length ? nums1 : nums2;
    const arr2 = nums1.length < nums2.length ? nums2 : nums1;
    const map = {};
    for (let n of arr1) {
        map[n] = (map?.[n] || 0) + 1;
    }

    const result = []
    for (let n of arr2) {
        if (map[n]) {
            result.push(n);
            map[n]--;
        }
    }
    return result;
};