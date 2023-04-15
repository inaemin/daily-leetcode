/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = [...Array(m)].map(el => [...Array(n)].fill(0));
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (i === 0) {
                dp[i][j] = dp[i][j-1] ? dp[i][j-1] + grid[i][j] : grid[i][j]
            } else if (j === 0) {
                dp[i][j] = dp[i-1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            }
        }
    }

    return dp[m-1][n-1];
};