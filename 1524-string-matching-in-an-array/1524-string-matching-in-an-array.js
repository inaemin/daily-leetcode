/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const map = {}
    const result = [];
    for (let word of words) {
        const substrings = words.filter(el => el.includes(word) && el !== word);
        if (substrings.length > 0) {
            map[substrings[0]] = true;
            result.push(word);
        }
    }
    return result;
};