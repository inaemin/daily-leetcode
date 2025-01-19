/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
    // 1은 오른쪽으로 가라는 뜻
    // 2는 왼쪽
    // 3은 아래쪽
    // 4는 위쪽
    const m = grid.length;
    const n = grid[0].length;
    const mpq = new PriorityQueue({
        compare: (e1, e2) => {
            if (e1.cost <= e2.cost) return -1; // do not swap
            return 1; // swap
        }
    });
    mpq.enqueue({cost: 0, x: 0, y: 0})
    const visited = Array.from({length: m}, () => new Array(n).fill(m*n));
    visited[0][0] = 0;

    let min_cost = 0;
    while (!mpq.isEmpty()) {
        const head = mpq.dequeue();
        if (head.x === m-1 && head.y === n-1) {
            min_cost = head.cost;
            break;
        }
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        for (let k=1; k<=4; k++) {
            const nx = head.x + dx[k-1];
            const ny = head.y + dy[k-1];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                if (k === grid[head.x][head.y]) {
                    if (head.cost < visited[nx][ny]) {
                        visited[nx][ny] = head.cost
                        mpq.enqueue({cost: head.cost, x: nx, y: ny});
                    }
                } else {
                    if (head.cost + 1 < visited[nx][ny]) {
                        visited[nx][ny] = head.cost + 1;
                        mpq.enqueue({cost: head.cost + 1, x: nx, y: ny});
                    }
                }
            }
        }

    }

    return min_cost;
};