/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let answer = 0;
    const left = new MinPriorityQueue();
    const right = new MinPriorityQueue();
    for (let i=0; i<candidates; i++) {
        if (!costs.length) break;
        if (costs.length) left.enqueue(costs.shift());
        if (costs.length) right.enqueue(costs.pop());
    }
    for (let i=0; i<k; i++) {
        if (left.isEmpty()) {
            answer += right.dequeue().element;
            if (costs.length) right.enqueue(costs.pop());
        } else if (right.isEmpty()) {
            answer += left.dequeue().element;
            if (costs.length) left.enqueue(costs.shift());
        } else if (left.front().element <= right.front().element) {
            answer += left.dequeue().element;
            if (costs.length) left.enqueue(costs.shift());
        } else if (left.front().element > right.front().element) {
            answer += right.dequeue().element;
            if (costs.length) right.enqueue(costs.pop());
        }
    }

    return answer;
};