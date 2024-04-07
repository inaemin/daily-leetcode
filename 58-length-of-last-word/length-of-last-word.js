/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ").filter(el => el.length > 0);
    return words[words.length - 1].length;
};