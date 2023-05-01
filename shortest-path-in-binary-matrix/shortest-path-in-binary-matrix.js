/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let depth = 1;
    const m = grid.length
    const n = grid[0].length
    const q = {[depth] : [[0,0]]};
    if (grid[0][0] === 1) return -1;
    if (m === 1 && n === 1) return depth;

    const bfs = (i, j, depth) => {
        if (i === m-1 && j === n-1 && grid[i][j] === 0) return true;
        if (i<0 || j<0 || i>=m || j>=n || grid[i][j] !== 0) return;
        if (grid[i][j] === 0) {
            if (q[depth] === undefined) q[depth] = [[i, j]];
            else q[depth].push([i, j]);
        }
        grid[i][j] = 1;
    }

    while (q[depth] !== undefined) {
        if (q[depth].some((pos) => {
            const [i, j] = pos;
            return bfs(i-1, j, depth+1) || bfs(i+1, j, depth+1) || bfs(i, j-1, depth+1) || bfs(i, j+1, depth+1)
            || bfs(i-1, j-1, depth+1) || bfs(i-1, j+1, depth+1) || bfs(i+1, j-1, depth+1) || bfs(i+1, j+1, depth+1)
        })) return depth+1;
        depth += 1;
    }

    return -1;
};