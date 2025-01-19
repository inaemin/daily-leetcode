/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;
    const visited = Array.from({ length: m }, () => new Array(n).fill(0));
    const mpq = new PriorityQueue({
        compare: (e1, e2) => e1.height - e2.height
    });

    for (let i=0; i<m; i++) {
        mpq.enqueue({height: heightMap[i][0], x: i, y: 0});
        mpq.enqueue({height: heightMap[i][n-1], x: i, y: n-1});
        visited[i][0] = 1;
        visited[i][n-1] = 1;
    }

    for (let j=0; j<n; j++) {
        mpq.enqueue({height: heightMap[0][j], x: 0, y: j});
        mpq.enqueue({height: heightMap[m-1][j], x: m-1, y: j});
        visited[0][j] = 1;
        visited[m-1][j] = 1;
    }

    let trapped = 0;
    while (!mpq.isEmpty()) {
        const head = mpq.dequeue();
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        for (let k=0; k<4; k++) {
            const nx = head.x + dx[k];
            const ny = head.y + dy[k];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && visited[nx][ny] !== 1) {
                if (heightMap[nx][ny] >= head.height) {
                    mpq.enqueue({height: heightMap[nx][ny], x: nx, y: ny});
                    visited[nx][ny] = 1;
                } else {
                    trapped += head.height - heightMap[nx][ny];
                    mpq.enqueue({height: head.height, x: nx, y: ny});
                    visited[nx][ny] = 1;
                }
            }
        }
    }

    return trapped;
};