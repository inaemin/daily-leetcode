/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
    const new_queries = queries.map((el, idx) => ([Math.min(...el), Math.max(...el), idx])).sort((a, b) => b[1] - a[1]);

    const stack = [];
    const result = [];
    let p = heights.length - 1
    for (let [x, y, idx] of new_queries) {
        while (p >= y) {
            while (heights[stack.at(-1)] <= heights[p]) {
                stack.pop();
            }
            stack.push(p);
            p--;
        }

        if (x === y) {
            result[idx] = x;
        } else if (heights[x] < heights[y]) {
            result[idx] = y;
        } else {
            let left = 0;
            let right = stack.length - 1;
            while (left <= right) {
                let mid = (left + right) / 2 | 0;
                if (heights[stack[mid]] > heights[x] && heights[stack[mid]] > heights[y]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            result[idx] = stack[right] !== undefined ? stack[right] : -1;

        }
    }
    return result;
};