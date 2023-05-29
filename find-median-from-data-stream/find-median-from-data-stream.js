var MedianFinder = function() {
    this.max_heap = new MaxPriorityQueue();
    this.min_heap = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.max_heap.front() === null && this.min_heap.front() === null) {
        this.max_heap.enqueue(num);
    } else if (this.max_heap.front().element >= num) {
        this.max_heap.enqueue(num);
    } else this.min_heap.enqueue(num);

    if (this.max_heap.size() - this.min_heap.size() >= 2) {
        const pop = this.max_heap.dequeue();
        this.min_heap.enqueue(pop.element);
    } else if (this.min_heap.size() - this.max_heap.size() >= 2) {
        const pop = this.min_heap.dequeue();
        this.max_heap.enqueue(pop.element);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const max_size = this.max_heap.size();
    const min_size = this.min_heap.size();
    if ((max_size + min_size) % 2 === 0) {
        const avg = (this.min_heap.front().element + this.max_heap.front().element)/2
        return parseFloat(avg.toFixed(5));
    } else {
        if (max_size > min_size) return this.max_heap.front().element;
        return this.min_heap.front().element;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */