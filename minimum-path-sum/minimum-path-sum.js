/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // (m+1)*(n+1) grid filled with 0;
    const m = grid.length;
    const n = grid[0].length;
    const dp = [...Array(m+1)].map(el => new Array(n+1).fill(0));
    for (let i=1; i<=m; i++) {
        for (let j=1; j<=n; j++) {
            if (i === 1) {
                dp[i][j] = grid[i-1][j-1] + dp[i][j-1]
            } else if (j === 1) {
                dp[i][j] = grid[i-1][j-1] + dp[i-1][j];
            } else {
                // dp[i][j] = grid[i-1][j-1] + Math.min(dp[i-1][j], dp[i][j-1])
                dp[i][j] = grid[i-1][j-1] + Math.min(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n];
};