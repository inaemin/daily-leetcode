/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
    // graph의 중심 노드를 찾기 -> tree1의 중심노드에서 제일 먼 노드까지의 거리 + tree2... + 1
    const n = edges1.length + 1;
    const m = edges2.length + 1;
    const tree1 = Array.from({ length: n }, () => new Array());
    const tree2 = Array.from({ length: m }, () => new Array());
    for (let [a, b] of edges1) {
        tree1[a].push(b);
        tree1[b].push(a);
    }
    for (let [u, v] of edges2) {
        tree2[u].push(v);
        tree2[v].push(u);
    }
    const t1dia = findDiameter(tree1, findTreeCenters(edges1));
    const t2dia = findDiameter(tree2, findTreeCenters(edges2));

    return Math.max(Math.ceil(t1dia/2) + Math.ceil(t2dia/2) + 1, t1dia, t2dia);
};

function findTreeCenters(edges) {
    const n = edges.length + 1;
    if (n === 1) return [0];

    const tree = Array.from({ length: n }, () => new Array());
    for (let [a, b] of edges) {
        tree[a].push(b);
        tree[b].push(a);
    }

    let remainingNodes = n;
    let leaves = [];
    // 차수가 1인 노드 찾기
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].length === 1) {
            leaves.push(i);
        }
    }

    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves = [];
        for (let i=0; i<leaves.length; i++) {
            const leaf = leaves[i];
            const neighbor = tree[leaf][0];
            tree[neighbor] = tree[neighbor].filter(el => el !== leaf);
            tree[leaf] = [];
            if (tree[neighbor].length === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }
    return leaves;
}

function findDiameter(tree, center) {
    // 제일 먼 노드 찾기
    const visited = new Set();
    let queue = [center[0]];
    visited.add(center[0]);
    let furthestNode = null;
    while (queue.length) {
        const head = queue.shift();
        for (let i=0; i<tree[head].length; i++) {
            if (!visited.has(tree[head][i])) {
                visited.add(tree[head][i]);
                queue.push(tree[head][i]);
                if (visited.size === tree.length) {
                    furthestNode = tree[head][i];
                }
            }
        }
    }

    if (furthestNode === null) { // 간선이 없는 노드
        return 0;
    }

    visited.clear(); // 방문셋 초기화
    
    // 제일 먼 노드에서 최대 거리를 찾기
    let diameter = 0;
    queue = [furthestNode];
    while (queue.length) {
        const nextQueue = [];
        for (let i=0; i<queue.length; i++) {
            for (let j=0; j<tree[queue[i]].length; j++) {
                if (!visited.has(tree[queue[i]][j])) {
                    visited.add(tree[queue[i]][j]);
                    nextQueue.push(tree[queue[i]][j]);
                }
            }
        }
        queue = nextQueue;
        diameter++;
    }

    return diameter - 1;
}