/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const result = [true];
    for (let i=1; i<=s.length; i++) {
        let r = false;
        wordDict.forEach((word) => {
            if (word.length <= i) {
                if (result[i-word.length] && word === s.slice(i-word.length, i)) r = true;
            }
        })
        result.push(r);
    }

    return result[result.length-1];
};