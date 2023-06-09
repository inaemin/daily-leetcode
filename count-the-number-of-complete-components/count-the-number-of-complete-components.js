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
            let status = true;
            const subgraph = [i, ...graph[i]].sort((a, b) => a - b);
            subgraph.forEach(el => visited.add(el)); // subgraph vetices 일단 visited에 추가.
            for (let v of subgraph) {
                const connected = [v, ...graph[v]].sort((a, b) => a - b);
                if (!connected.every((ele, idx) => ele === subgraph[idx])) {
                    status = false;
                    break;
                }
            }
            if (status) answer++;
        }
    }

    return answer;
};