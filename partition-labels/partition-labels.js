/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = {};
    for (let i=0; i<s.length; i++) {
        map[s[i]] = i;
    }

    const result = [];
    let startIdx = 0;
    let lastIdx = map[s[0]];
    while (startIdx !== s.length) {
        for (let i=startIdx; i<=lastIdx; i++) {
            if (map[s[i]] > lastIdx) lastIdx = map[s[i]];
        }
        result.push(lastIdx-startIdx+1);
        startIdx = lastIdx + 1;
        lastIdx = map[s[startIdx]];
    }

    return result;
};