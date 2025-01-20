/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const m = mat.length;
    const n = mat[0].length;
    const row = new Array(m).fill(0);
    const col = new Array(n).fill(0);
    const table = new Array(arr.length+1).fill(0);
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            table[mat[i][j]] = [i, j];
        }
    }

    for (let k=0; k<arr.length; k++) {
        const [i, j] = table[arr[k]];
        row[i]++;
        col[j]++;
        if (row[i] >= n || col[j] >= m) {
            return k
        }
    }
};