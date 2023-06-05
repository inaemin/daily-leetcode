/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function(n, queries) {
    let answer = 0;
    const row = new Set();
    const column = new Set();
    for (let i=queries.length-1; i>=0; i--) {
        const [type, idx, val] = queries[i];
        if (type === 0 && !row.has(idx)) {
            row.add(idx);
            answer += val * (n - column.size);
        } else if (type === 1 && !column.has(idx)) {
            column.add(idx);
            answer += val * (n - row.size);
        }
    }

    return answer;
};