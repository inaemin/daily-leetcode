/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const indegree = [...Array(n)].fill(0);
    const node = [...Array(n)].map(el => new Array());
    edges.forEach((edge) => {
        const [x, y] = edge;
        indegree[y] += 1;
        node[x].push(y);
    })

    const queue = [];
    const ancestor = [...Array(n)].map(el => new Set());

    for (let i=0; i<indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
            indegree[i] -= 1;
        }
    }
    while (queue.length) {
        let next = queue.shift();
        node[next].forEach(el => {
            if (ancestor[next].size > 0) {
                ancestor[next].forEach(an => ancestor[el].add(an));
            }
            ancestor[el].add(next);
            indegree[el] -= 1;
            if (indegree[el] === 0) {
                queue.push(el);
                indegree[el] -= 1;
            }
        });
    }

    return ancestor.map(el => Array.from(el).sort((a, b) => a - b));
};