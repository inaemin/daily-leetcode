/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];

    let prefix = 1;
    while (prefix <= strs[0].length) {
        for (let i=1; i<strs.length; i++) {
            if (!strs[0].length || !strs[i].length) return "";
            if (strs[0].slice(0, prefix) !== strs[i].slice(0, prefix)) {
                return strs[0].slice(0, prefix-1)
            }
        }
        prefix += 1;
    }
    return strs[0].slice(0, prefix);
};