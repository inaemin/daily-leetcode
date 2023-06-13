/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const column = {};
    for (let j=0; j<n; j++) {
        const temp = []
        for (let i=1; i<n; i++) {
            temp.push(grid[i][j])
        }
        if (column[grid[0][j]]) column[grid[0][j]].push(temp);
        else column[grid[0][j]] = [temp];
    }

    let answer = 0;
    for (let i=0; i<n; i++) {
        if (column[grid[i][0]]) {
            const [first, ...rest] = grid[i];
            column[first].forEach((element) => {
                if (element.every((el, idx) => el === rest[idx])) answer++;
            })
        }
    }

    return answer;
};