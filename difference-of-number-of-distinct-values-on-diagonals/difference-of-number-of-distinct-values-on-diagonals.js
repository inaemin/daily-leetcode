/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const result = [...Array(m)].map(el => new Array(n).fill(0));
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            let cnt = 1;
            const top_left = new Set()
            const bottom_right = new Set()
            while (i-cnt>=0 && j-cnt>=0 || i+cnt<m && j+cnt<n) {
                if (i-cnt>=0 && j-cnt>=0) top_left.add(grid[i-cnt][j-cnt])
                if (i+cnt<m && j+cnt<n) bottom_right.add(grid[i+cnt][j+cnt])
                cnt++;
            }
            result[i][j] = Math.abs(top_left.size - bottom_right.size);
        }
    }
    
    return result;    
};