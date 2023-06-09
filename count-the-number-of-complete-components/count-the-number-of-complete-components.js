/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const graph = [...Array(n)].map(el => new Array());
    edges.forEach((el) => {
        const [i, j] = el;
        graph[i].push(j);
        graph[j].push(i);
    })

    let answer = 0;
    const visited = new Set();
    for (let i=0; i<n; i++) {
        if (!visited.has(i)) {
            let status = true;
            const subgraph = [i, ...graph[i]].sort((a, b) => a - b);
            for (let v of subgraph) {
                visited.add(v);
                const connected = [v, ...graph[v]].sort((a, b) => a - b);
                if (!connected.every((ele, idx) => ele === subgraph[idx])) status = false;
            }
            if (status) answer++;
        }
    }

    return answer;
};