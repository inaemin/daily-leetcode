/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
    /**
    indegree: 받는 edge의 개수.
    graph: from: [to]
    edges: [from, to]
    result to: [from]
    queue []
    1. 큐에 indegree가 0인 index 추가
    2. while 반복문으로 조상인 노드에서 이어진 노드에 result[to].push(from)
    3. result[from].forEach(n => result[to].add(n))
    4. indegree[to]--;
    5. indegree[to] === 0 -> queue.push(to)
    6. return result;
     */
    const graph = Array.from({ length: n }, () => []);
    const indegree = Array(n).fill(0);
    for (let [from, to] of edges) {
        indegree[to]++;
        graph[from].push(to);
    }

    const result = Array.from({ length: n }, () => new Set());
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length > 0) {
        const node = queue.shift();
        for (let neighbor of graph[node]) {
            result[neighbor].add(node);
            result[node].forEach((n) => result[neighbor].add(n));
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor)
            }
        }
    }

    return result.map(el => Array.from(el).sort((a, b) => a - b));
};