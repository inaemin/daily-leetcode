/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const coords = new Map();
    for (let i=0; i<mat.length; i++) {
        for (let j=0; j<mat[0].length; j++) {
            coords.set(mat[i][j], [i,j]);
        }
    }

    const m = {};
    const n = {};
    for (let i=0; i<arr.length; i++) {
        const [x, y] = coords.get(arr[i]);
        m[x] = m[x] === undefined ? 1 : m[x] + 1;
        n[y] = n[y] === undefined ? 1 : n[y] + 1;
        if (m[x] === mat[0].length || n[y] === mat.length) return i;
    }
    
};