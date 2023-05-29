/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const pairs = [];
    const n = nums1.length;
    for (let i=0; i<n; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }
    pairs.sort((a, b) => b[1] - a[1]);
    const heap = new MinPriorityQueue();
    let total_sum = 0;
    let answer = 0;
    for (let i=0; i<n; i++) {
        if (heap.size() === k) total_sum -= heap.dequeue().element;
        heap.enqueue(pairs[i][0]);
        total_sum += pairs[i][0];
        if (heap.size() === k) answer = Math.max(answer, total_sum*pairs[i][1])
    }
    return answer;
};