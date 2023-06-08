/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const m = grid.length;
    let n = grid[0].length;
    let answer = 0;
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] < 0) {
                answer += (m - i) * (n - j);
                n = j;
                break;
            }
        }
    }

    return answer;
};