/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const fish = [];
    const dfs = (i, j) => {
        let f = 0;
        if (i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]<=0) return f;
        f += grid[i][j]
        grid[i][j] = 0;
        f += dfs(i+1, j);
        f += dfs(i-1, j);
        f += dfs(i, j+1);
        f += dfs(i, j-1);
        return f;
    }   
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] > 0) fish.push(dfs(i, j));
        }
    }

    return fish.length ? Math.max(...fish) : 0;
};