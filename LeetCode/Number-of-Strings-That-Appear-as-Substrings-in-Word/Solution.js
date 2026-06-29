1/**
2 * @param {string[]} patterns
3 * @param {string} word
4 * @return {number}
5 */
6var numOfStrings = function(patterns, word) {
7    const patternMap = patterns.reduce((acc, ele) => {
8        acc[ele] = acc?.[ele] + 1 || 1;
9        return acc;
10    }, {});
11
12    let cnt = 0;
13    const keys = Object.keys(patternMap)
14    for (let i=0; i<keys.length; i++) {
15        const p = keys[i];
16        if (!word.includes(p)) continue;
17
18        const value = patternMap[keys[i]];
19        cnt += value;
20    }
21
22    return cnt;
23};