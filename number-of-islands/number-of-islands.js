/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    let island = 0;
    const visited = new Set();
    const candidate = (i, j) => {
        const result = [];
        if (j+1 < grid[0].length && !visited.has(`${i},${j+1}`) && grid[i][j+1] === "1") {
            result.push(`${i},${j+1}`);
            visited.add(`${i},${j+1}`);
        }
        if (i+1 < grid.length && !visited.has(`${i+1},${j}`) && grid[i+1][j] === "1") {
            result.push(`${i+1},${j}`);
            visited.add(`${i+1},${j}`);
        }
        if (j-1 >=0 && !visited.has(`${i},${j-1}`) && grid[i][j-1] === "1") {
            result.push(`${i},${j-1}`);
            visited.add(`${i},${j-1}`);
        }
        if (i-1 >=0 && !visited.has(`${i-1},${j}`) && grid[i-1][j] === "1") {
            result.push(`${i-1},${j}`);
            visited.add(`${i-1},${j}`);
        }
        return result;
    }
    const dfs = (i, j) => {
        visited.add(`${i},${j}`);
        const cand = candidate(i, j)
        while (cand.length) {
            const [x, y] = cand.pop().split(",");
            cand.push(...candidate(Number(x), Number(y)))
        }
    }

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (visited.has(`${i},${j}`)) continue;
            else if (!visited.has(`${i},${j}`) && grid[i][j] === "1") {
                dfs(i, j);
                island += 1;
            } else if (!visited.has(`${i},${j}`) && grid[i][j] === "0" ) {
                visited.add(`${i},${j}`);
            }
        }
    }

    return island;
};