/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const map = new Map();
    for (let w of wordDict) {
        map.set(w, w.length);
    }
    const result = [true];
    for (let i=1; i<=s.length; i++) {
        let r = false;
        map.forEach((len, word) => {
            if (len <= i) {
                if (result[i-len] && word === s.slice(i-len, i)) r = true;
            }
        })
        result.push(r);
    }

    return result[result.length-1];
};