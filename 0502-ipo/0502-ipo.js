/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    // 프로젝트를 자본 기준으로 정렬
    const projects = capital.map((cap, i) => [cap, profits[i]]);
    projects.sort((a, b) => a[0] - b[0]);

    // 최대 이익을 추적하기 위한 우선순위 큐
    const maxProfitQueue = new MaxPriorityQueue({ priority: x => x });

    let index = 0;
    for (let i = 0; i < k; i++) {
        // 현재 자본으로 수행할 수 있는 모든 프로젝트를 큐에 추가
        while (index < projects.length && projects[index][0] <= w) {
            maxProfitQueue.enqueue(projects[index][1]);
            index++;
        }

        // 큐에서 최대 이익을 얻을 수 있는 프로젝트를 선택
        if (!maxProfitQueue.isEmpty()) {
            w += maxProfitQueue.dequeue().element;
        } else {
            // 더 이상 수행할 수 있는 프로젝트가 없는 경우
            break;
        }
    }

    return w;
};