/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j, 0]);
                mat[i][j] = 0;
            } else {
                mat[i][j] = -1;
            }
        }
    }

    let idx = 0;
    while (idx < queue.length) {
        const [i, j, height] = queue[idx];
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        for (let k = 0; k < 4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && mat[nx][ny] === -1) {
                queue.push([nx, ny, height + 1]);
                mat[nx][ny] = height + 1;
            }
        }
        idx++;
    }
    return mat;
};