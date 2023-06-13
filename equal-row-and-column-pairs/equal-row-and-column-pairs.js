/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const isEqual = (row, column) => {
        for (let i=0; i<row.length; i++) {
            if (row[i] !== column[i]) return false;
        }
        return true;
    }
    
    const n = grid.length;
    let answer = 0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][0] === grid[0][j]) {
                const column = []
                for (let k=0; k<n; k++) {
                    column.push(grid[k][j]);
                }
                if (isEqual(grid[i], column)) answer++;
            }
        }
    }

    return answer;
};