const UnionFind = function (n) { // n: 노드의 개수.
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.rank = Array(n + 1).fill(1);
}

UnionFind.prototype.find = function (n) { // 노드 n의 제일 높은 조상 찾기.
    if (n !== this.parent[n]) {
        this.parent[n] = this.find(this.parent[n]); // Path compression
    }
    return this.parent[n];
}

UnionFind.prototype.union = function (n1, n2) { // 노드1과 2의 조상을 비교. 다르면 더 높은 레벨의 조상 밑으로 합침.
    const p1 = this.find(n1);
    const p2 = this.find(n2);
    if (p1 === p2) return false;
    if (this.rank[p1] > this.rank[p2]) {
        this.parent[p2] = p1;
        this.rank[p1] += this.rank[p2]
    } else {
        this.parent[p1] = p2;
        this.rank[p2] += this.rank[p1]
    }
    return true;
}

UnionFind.prototype.isAllConnected = function () {
    const root = this.find(1);
    for (let i = 2; i < this.parent.length; i++) {
        if (this.find(i) !== root) {
            return false;
        }
    }
    return true;
}




/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
    /**
    Union Find 문제
    684번 참고
     */

    const alice = new UnionFind(n);
    const bob = new UnionFind(n);
    // 간선 연결
    edges.sort((a, b) => b[0] - a[0]); // type 내림차순으로.
    let remove = 0;
    for (let [type, n1, n2] of edges) {
        if (type === 3) {
            const a_result = alice.union(n1, n2);
            const b_result = bob.union(n1, n2);
            if (!a_result && !b_result) {
                remove++;
            }
        } else if (type === 2) {
            if (!bob.union(n1, n2)) {
                remove++;
            }
        } else if (type === 1) {
            if (!alice.union(n1, n2)) {
                remove++;
            }
        }
    }

    // 모든 간선이 연결되었는지 확인
    if (alice.isAllConnected() && bob.isAllConnected()) {
        return remove;
    }
    return -1;
};