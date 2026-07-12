1/**
2 * @param {number[]} arr
3 * @return {number[]}
4 */
5var arrayRankTransform = function(arr) {
6    const n = arr.length;
7    const idx_map = {};
8    for (let i=0; i<n; i++) {
9        if (!idx_map[arr[i]]) {
10            idx_map[arr[i]] = [];
11        }
12        idx_map[arr[i]].push(i);
13    }
14    const keys = Object.keys(idx_map).sort((a, b) => a - b)
15    const max_rank = keys.length;
16    for (let i=0; i<max_rank; i++) {
17        for (let idx of idx_map[keys[i]]) {
18            arr[idx] = i+1;
19        }
20    }
21
22    return arr;
23};