/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const diff = s.split("").map((s, idx) => Math.abs(s.charCodeAt(0) - t[idx].charCodeAt(0)))

    let sum = 0;
    let start = 0;
    let maxLen = 0;
    for (let end=0; end<diff.length; end++) {
        sum += diff[end];
        if (sum > maxCost) {
            while (sum > maxCost) {
                sum -= diff[start];
                start++;
            }
        }
        maxLen = Math.max(end-start+1, maxLen);
    }
    return maxLen;
};