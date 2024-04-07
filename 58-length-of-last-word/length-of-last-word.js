/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ").filter(el => el.length > 0);
    return words.at(-1).length
};