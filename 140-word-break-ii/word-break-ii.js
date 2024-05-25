/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const dict = {};
    for (let word of wordDict) {
        dict[word] = true;
    }
    const result = [];
    const bt = (start, str=" ") => {
        if (start >= s.length) {
            result.push(str.trim());
            return;
        }
        const arr = []
        for (let i=start; i<s.length; i++) {
            if (dict[s.slice(start, i+1)]) {
                bt(i+1, str+" "+s.slice(start, i+1))
            }
        }
    }
    bt(0)
    return result;
};