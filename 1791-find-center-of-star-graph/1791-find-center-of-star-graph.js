/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const hash = {};
    let max_cnt = 0;
    let max_node;
    for (let [u, v] of edges) {
        hash[u] = (hash?.[u] || 0) + 1;
        if (hash[u] > max_cnt) {
            max_cnt = hash[u];
            max_node = u;
        }
        hash[v] = (hash?.[v] || 0) + 1;
        if (hash[v] > max_cnt) {
            max_cnt = hash[v];
            max_node = v;
        }
    }
    return max_node;
};