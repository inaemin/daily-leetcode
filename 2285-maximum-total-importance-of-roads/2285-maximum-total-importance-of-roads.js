/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
    // 최대 total importance
    // 도로연결이 많이 되어있을수록 importance가 커짐
    const node = Array.from({ length: n }, () => Array(n).fill(0));
    for (let [u, v] of roads) {
        node[u][v] = 1;
        node[v][u] = 1;
    }
    const connect_road = node.map(el => el.reduce((a, e) => a + e, 0));
    connect_road.sort((a, b) => b - a);
    let max_sum = 0;
    for (let i = 0; i < connect_road.length; i++) {
        max_sum += connect_road[i] * (n - i)
    }
    return max_sum;
};