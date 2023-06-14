/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    })
    const result = [];
    let end_point = null;
    for (let interval of intervals) {
        const [min, max] = interval;
        if (!result.length || min > end_point) {
            result.push(interval);
            end_point = max;
        } else if (min <= end_point) {
            const [min_point, max_point] = result[result.length-1];
            result[result.length-1] = [Math.min(min_point, min), Math.max(max_point, max)];
            end_point = result[result.length-1][1];
        }
    }

    return result;
};