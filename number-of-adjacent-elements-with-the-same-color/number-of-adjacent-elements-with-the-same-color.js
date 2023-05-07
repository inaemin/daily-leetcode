/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    const colors = Array(n).fill(0);
    const result = [];
    let cnt = 0;
    for (query of queries) {
        const [idx, color] = query;
        if (colors[idx-1] !== 0) {
            if (colors[idx-1] === colors[idx] && colors[idx-1] !== color) cnt -= 1;
            if (colors[idx-1] !== colors[idx] && colors[idx-1] === color) cnt += 1;
        }
        if (colors[idx+1] !== 0) {
            if (colors[idx+1] === colors[idx] && colors[idx+1] !== color) cnt -= 1;
            if (colors[idx+1] !== colors[idx] && colors[idx+1] === color) cnt += 1;
        }
        colors[idx] = color;
        result.push(cnt);
    }

    return result;
};