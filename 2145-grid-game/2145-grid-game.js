/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    const n = grid[0].length;

    let sum1 = grid[0].reduce((a, b) => a + b, 0) - grid[0][0];
    let sum2 = 0;
    let min_second = Math.max(sum1, sum2);
    for (let i=1; i<n; i++) {
        sum1 -= grid[0][i];
        sum2 += grid[1][i-1];
        if (min_second > Math.max(sum1, sum2)) {
            min_second = Math.max(sum1, sum2);
        }
    }

    return min_second;
};