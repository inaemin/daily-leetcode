/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const graph = [...Array(n)].map(el => new Array());
    for (let [i, j] of edges) {
        graph[i].push(j);
        graph[j].push(i);
    }

    let answer = 0;
    const visited = new Set();
    for (let i=0; i<n; i++) {
        if (!visited.has(i)) {
            visited.add(i);
            const queue = [i];
            for (let q of queue) {
                for (let v of graph[q]) {
                    if (!visited.has(v)) {
                        queue.push(v);
                        visited.add(v)
                    }
                }
            }
            if (queue.every(el => graph[el].length === queue.length-1)) answer++;
        }
    }

    return answer;
};