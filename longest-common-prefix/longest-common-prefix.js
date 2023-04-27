/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    let prefix = strs[0];
    for (let i=1; i<strs.length; i++) {
        if (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            i = 0;
        }
        if (prefix === "") return prefix
    }

    return prefix;
};