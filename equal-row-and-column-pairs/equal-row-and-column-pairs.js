/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const column = new Map();
    for (let j=0; j<n; j++) {
        const temp = []
        for (let i=1; i<n; i++) {
            temp.push(grid[i][j])
        }
        if (column.has(grid[0][j])) column.set(grid[0][j], [...column.get(grid[0][j]), temp])
        else column.set(grid[0][j], [temp])
    }

    let answer = 0;
    for (let i=0; i<n; i++) {
        if (column.has(grid[i][0])) {
            const [first, ...rest] = grid[i];
            column.get(first).forEach((element) => {
                if (element.every((el, idx) => el === rest[idx])) answer++;
            })
        }
    }

    return answer;
};