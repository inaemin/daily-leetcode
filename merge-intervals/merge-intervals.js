/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    })
    
    const result = [intervals[0]];
    let end_point = intervals[0][1];
    for (let i=1; i<intervals.length; i++) {
        const [min, max] = intervals[i];
        if (min > end_point) {
            result.push(intervals[i]);
            end_point = max;
        } else if (min <= end_point) {
            result[result.length-1][1] = Math.max(end_point, max);
            end_point = result[result.length-1][1];
        }
    }

    return result;
};