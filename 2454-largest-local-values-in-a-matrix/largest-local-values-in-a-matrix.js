/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const ans = []

    for (let x=0; x<n-2; x++) {
        for (let y=0; y<m-2; y++) {
            let max = 0;
            for (let i=x; i<x+3; i++) {
                for (let j=y; j<y+3; j++) {
                    if (grid[i][j] > max) max= grid[i][j]
                }
            }
            if (!ans[x]) {
                ans[x] = [max]
            } else {
                ans[x][y] = max;
            }
        }
    }
    
    return ans;
};