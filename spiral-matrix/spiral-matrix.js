/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    while (matrix.length) {
        result.push(...matrix.shift());
        for (let row of matrix) {
            if (row.length) {
                result.push(row.pop());
                row.reverse();
            }
        }
        matrix.reverse();
    }
    return result;
};