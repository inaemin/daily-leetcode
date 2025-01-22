/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;
    const queue = [];
    const heights = Array.from({length: m}, () => new Array(n).fill(-1));
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (isWater[i][j] === 1) {
                queue.push([i, j, 0]);
                heights[i][j] = 0;
            }
        }
    }

    let idx=0;
    while (idx < queue.length) {
        const [i, j, height] = queue[idx];
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        for (let k=0; k<4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && heights[nx][ny] === -1) {
                queue.push([nx, ny, height + 1]);
                heights[nx][ny] = height + 1;
            }
        }
        idx++;
    }
    return heights;
};