/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = Array.from({length: edges.length}, (_, i) => i)
    const rank = Array(edges.length).fill(1);
    const find = (n) => { // 가장 높은 조상 찾기.
        let p = parent[n];
        while (p !== parent[p]) {
            parent[p] = parent[parent[p]]
            p = parent[p]
        }
        return p;
    }

    const union = (n1, n2) => {
        const p1 = find(n1);
        const p2 = find(n2);
        if (p1 === p2) return false;
        else {
            if (rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2]
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1]
            }
        }
        return true;
    }

    let remove = []
    for (let [n1, n2] of edges) {
        if (!union(n1, n2)) {
            remove = [n1, n2]
        }
    }

    return remove;
};