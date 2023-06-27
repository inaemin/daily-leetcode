/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let answer = 0;
    if (candidates*2+k-1 >= costs.length) {
        costs.sort((a, b) => a - b);
        for (let i=0; i<k; i++) {
            answer += costs[i];
        }
        return answer;
    }
    const left = new MinPriorityQueue();
    const right = new MinPriorityQueue();
    let left_ps = 0, right_ps = costs.length-1;
    for (let i=0; i<candidates; i++) {
        left.enqueue(costs[left_ps++]);
        right.enqueue(costs[right_ps--]);
    }
    for (let i=0; i<k; i++) {
        if (left.front().element > right.front().element) {
            answer += right.dequeue().element;
            right.enqueue(costs[right_ps--]);
        } else {
            answer += left.dequeue().element;
            left.enqueue(costs[left_ps++]);
        }
    }

    return answer;
};