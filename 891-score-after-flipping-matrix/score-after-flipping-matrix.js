/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    for (let i=0; i<n; i++) {
        if (grid[i][0] !== 1) {
            for (let j=0; j<grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    grid[i][j] = 0
                } else {
                    grid[i][j] = 1
                }
            }
        }
    }

    for (let j=1; j<m; j++) {
        let count1 = 0
        let count0 = 0
        for (let i=0; i<n; i++) {
            if (grid[i][j] === 1) {
                count1 += 1
            } else {
                count0 += 1
            }
        }
        if (count0 > count1) {
            for (let i=0; i<n; i++) {
                if (grid[i][j] === 1) {
                    grid[i][j] = 0
                } else {
                    grid[i][j] = 1
                }
            }
        }
    }

    const ans = grid.reduce((a, e) => a + parseInt(e.join(""), 2), 0)
    return ans;
};