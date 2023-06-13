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
    const isEqual = (first, rest) => {
        for (let el of column[first]) {
            let status = true;
            for (let i=0; i<n-1; i++) {
                if (el[i] !== rest[i]) {
                    status = false;
                    break;
                }
            }
            if (status) answer++
        }
    }

    for (let i=0; i<n; i++) {
        if (column[grid[i][0]]) {
            const [first, ...rest] = grid[i];
            isEqual(first, rest);
        }
    }

    return answer;
};