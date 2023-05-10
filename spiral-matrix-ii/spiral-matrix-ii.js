/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = [...Array(n)].map(el => new Array(n));
    let top = 0, bottom = n-1, left = 0, right = n-1;
    let num = 1;
    while (top <= bottom && left <= right) {
        // Traverse right
        for (let i=left; i<=right; i++) matrix[top][i] = num++
        top += 1;

        // Traverse down
        for (let i=top; i<=bottom; i++) matrix[i][right] = num++
        right -= 1;

        // Traverse left
        for (let i=right; i>=left; i--) matrix[bottom][i] = num++
        bottom -= 1;

        // Traverse up
        for (let i=bottom; i>=top; i--) matrix[i][left] = num++
        left += 1;
    }
    return matrix;
};