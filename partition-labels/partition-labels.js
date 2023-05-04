/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = new Map();
    for (let i=0; i<s.length; i++) {
        map.set(s[i], i);
    }

    const result = [];
    let startIdx = 0;
    let lastIdx = map.get(s[0]);
    while (startIdx !== s.length) {
        for (let i=startIdx; i<=lastIdx; i++) {
            if (map.get(s[i]) > lastIdx) lastIdx = map.get(s[i]);
        }
        result.push(lastIdx-startIdx+1);
        startIdx = lastIdx + 1;
        lastIdx = map.get(s[startIdx]);
    }

    return result;
};