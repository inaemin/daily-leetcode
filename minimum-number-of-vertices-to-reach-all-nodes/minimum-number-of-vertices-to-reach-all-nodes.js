/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const indegree = Array(n).fill(0);
    edges.forEach(el => {
        const [from, to] = el;
        indegree[to] += 1;
    })
    const result = [];
    indegree.forEach((el, idx) => {
        if (el === 0) result.push(idx);
    })
    return result;
};