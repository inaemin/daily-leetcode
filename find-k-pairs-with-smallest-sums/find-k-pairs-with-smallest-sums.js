/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const heap = new MaxPriorityQueue({priority: (ele) => ele.val});
    let limit = Infinity;
    for (let i=0; i<nums1.length; i++) {
        for (let j=0; j<nums2.length; j++) {
            const ele = {
                element: [nums1[i], nums2[j]],
                val: nums1[i] + nums2[j]
            }
            if (ele.val > limit) break;
            if (ele.val <= limit) heap.enqueue(ele);
            if (heap.size() > k) {
                limit = heap.dequeue().element.val;
            }
        }
    }
    const result = heap.toArray().reduce((r, e) => {
        r.unshift(e.element.element);
        return r;
    }, [])
    return result;
};