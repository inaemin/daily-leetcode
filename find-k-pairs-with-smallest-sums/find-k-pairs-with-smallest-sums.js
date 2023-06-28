/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const heap = new MaxPriorityQueue({priority: (ele) => ele.val});
    for (let i=0; i<nums1.length; i++) {
        for (let j=0; j<nums2.length; j++) {
            const ele = {
                element: [nums1[i], nums2[j]],
                val: nums1[i] + nums2[j]
            }
            if (heap.size() === k && ele.val > heap.front().element.val) break;
            heap.enqueue(ele);
            if (heap.size() > k) heap.dequeue();
        }
    }

    const result = [];
    while (heap.size()) {
        result.unshift(heap.dequeue().element.element)
    }
    return result;
};