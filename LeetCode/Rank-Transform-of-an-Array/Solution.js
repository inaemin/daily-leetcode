1/**
2 * @param {number[]} arr
3 * @return {number[]}
4 */
5var arrayRankTransform = function(arr) {
6    const sorted = [...new Set(arr)].sort((a ,b) => a - b);
7    const rankMap = new Map();
8    sorted.forEach((v, i) => rankMap.set(v, i+1));
9    return arr.map(v => rankMap.get(v));
10};