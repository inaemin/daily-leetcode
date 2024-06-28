/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
    // 최대 total importance
    // 도로연결이 많이 되어있을수록 importance가 커짐
    const nodes = Array(n).fill(0);
    for (let [u, v] of roads) {
        nodes[u]++;
        nodes[v]++;
    }
    nodes.sort((a, b) => b - a);
    let max_sum = 0;
    for (let i = 0; i < nodes.length; i++) {
        max_sum += nodes[i] * (n - i)
    }
    return max_sum;
};