/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = [...Array(m)].map(el => new Array(n).fill(0));
    for (let j=n-2; j>=0; j--) {
        for (let i=0; i<m; i++) {
            const cand = [];
            for (let row=-1; row<=1; row++) {
                if (i+row >= 0 && i+row < m && grid[i][j] < grid[i+row][j+1]) {
                    cand.push(dp[i+row][j+1]);
                }
            }
            dp[i][j] = cand.length ? Math.max(...cand) + 1 : 0;
        }
    }
    const max_cand = [];
    for (let i=0; i<m; i++) {
        max_cand.push(dp[i][0]);
    }
    return Math.max(...max_cand);
};