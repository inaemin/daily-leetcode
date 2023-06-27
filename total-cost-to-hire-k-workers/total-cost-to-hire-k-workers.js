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
        if (left_ps <= right_ps) {
            left.enqueue(costs[left_ps++]);
            if (left_ps <= right_ps) {
                right.enqueue(costs[right_ps--]);
            }
        }
    }
    for (let i=0; i<k; i++) {
        let status;
        if (left.isEmpty()) {
            status = "right"
            answer += right.dequeue().element;
        } else if (right.isEmpty()) {
            status = "left"
            answer += left.dequeue().element;
        } else if (left.front().element > right.front().element) {
            status = "right"
            answer += right.dequeue().element;
        } else if (left.front().element <= right.front().element) {
            status = "left"
            answer += left.dequeue().element;
        }

        if (left_ps <= right_ps) {
            if (status === "right") {
                right.enqueue(costs[right_ps--]);
            } else if (status === "left") {
                left.enqueue(costs[left_ps++]);
            }
        }
    }

    return answer;
};