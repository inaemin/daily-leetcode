/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    // shortest path를 구하려면 bfs를 이용해야 함.
    const m = grid.length;
    const n = grid[0].length;
    if (grid[0][0] === 1 || grid[m-1][n-1] === 1) return -1;

    const bfs = (i, j, step) => {
        const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        for (let dir of directions) {
            const [moveX, moveY] = dir;
            if (i+moveX >= 0 && i+moveX < m && j+moveY >= 0 && j+moveY < n && grid[i+moveX][j+moveY] === 0) {
                grid[i+moveX][j+moveY] = step + 1;
                queue.push([i+moveX, j+moveY, step + 1]);
            }
        }
    }
    const queue = [[0, 0, 1]];
    while (queue.length) {
        const [x, y, step] = queue.shift();
        grid[x][y] = step;
        bfs(x, y, step);
    }
    if (!grid[m-1][n-1]) return -1;
    return grid[m-1][n-1];
};