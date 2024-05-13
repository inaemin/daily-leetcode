/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
    const workers = quality.map((el, idx) => ({
            quality: el,
            ratio: wage[idx] / el,
    })).sort((a, b) => a.ratio - b.ratio)

    let minCost = Infinity;
    const queue = new MaxPriorityQueue()
    let totalQuality = 0;
    for (let worker of workers) {
        queue.enqueue(worker.quality)
        totalQuality += worker.quality
        if (queue.size() > k) {
            totalQuality -= queue.dequeue().element;
        }
        if (queue.size() === k) {
            minCost = Math.min(totalQuality * worker.ratio, minCost)
        }
    }

    return minCost
};