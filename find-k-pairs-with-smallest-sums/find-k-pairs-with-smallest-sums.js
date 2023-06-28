/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    const heap = new MinPriorityQueue({priority: (e) => e.val});
    for (let n1 of nums1) {
        const element = {
            element: [n1, 0],
            val: n1 + nums2[0]
        }
        heap.enqueue(element);
    }
    for (let i=0; i<Math.min(k, nums1.length*nums2.length); i++) {
        const [n1, n2_idx] = heap.dequeue().element.element;
        result.push([n1, nums2[n2_idx]]);
        if (nums2[n2_idx+1]) {
            const element = {
                element: [n1, n2_idx+1],
                val: n1 + nums2[n2_idx+1]
            }
            heap.enqueue(element)
        }
    }

    return result;
};