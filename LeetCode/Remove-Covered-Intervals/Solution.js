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
17    let min_l = intervals[0][0];
18    let max_r = intervals[0][1];
19    let cnt = 1;
20    for (let [x, y] of intervals) {
21        if (min_l <= x && max_r >= y) {
22            continue;
23        } else {
24            // max_r < y
25            min_l = x;
26            max_r = y;
27            cnt++;
28        }
29    }
30
31    return cnt;
32};