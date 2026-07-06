1/**
2 * @param {number[][]} intervals
3 * @return {number}
4 */
5var removeCoveredIntervals = function(intervals) {
6    /**
7    intervals를 [0]오름차순으로 정렬
8    같으면 [1]내림차순
9     */
10    intervals.sort((a, b) => {
11        if (a[0] !== b[0]) {
12            return a[0] - b[0];
13        }
14        return b[1] - a[1]
15    })
16
17    let max_r = intervals[0][1];
18    let cnt = 1;
19    for (let [x, y] of intervals) {
20        if (max_r >= y) {
21            continue;
22        } else {
23            // max_r < y
24            max_r = y;
25            cnt++;
26        }
27    }
28
29    return cnt;
30};