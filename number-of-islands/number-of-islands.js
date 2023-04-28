/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const fill = (i, j) => {
        if (i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j] !== "1") return;
        grid[i][j] = "0";
        fill(i+1, j);
        fill(i, j+1);
        fill(i-1, j);
        fill(i, j-1);
    }
    let island = 0;
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === "1") {
                fill(i, j);
                island += 1;
            }
        }
    }
    return island;
};