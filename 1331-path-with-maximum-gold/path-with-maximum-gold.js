/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const dfs = (i, j) => {
        if (i<0 || i>=n || j<0 || j>=m || !grid[i][j]) return 0;
        let currentGold = grid[i][j]
        grid[i][j] = 0;
        let maxGold = currentGold + Math.max(dfs(i+1, j), dfs(i-1, j), dfs(i, j+1), dfs(i, j-1))
        grid[i][j] = currentGold
        return maxGold
    }

    let max = 0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            max = Math.max(dfs(i, j), max)
        }
    }

    return max;
};