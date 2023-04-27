/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    let prefix = ""
    for (let i=0; i<strs[0].length; i++) {
        let s = strs[0][i];
        for (let j=1; j<strs.length; j++) {
            let ss = strs[j][i];
            if (s !== ss) return prefix
        }
        prefix += s;
    }
    return prefix;
};