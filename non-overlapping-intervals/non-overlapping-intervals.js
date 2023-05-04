/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort(([a,b], [c,d]) => b - d);

    let answer = 0;
    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i=1; i<intervals.length; i++) {
        if (intervals[i][0] < end) answer += 1;
        else {
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }

    return answer;
};