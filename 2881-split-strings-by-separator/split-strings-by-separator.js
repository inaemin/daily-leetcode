/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const arr = [];
    for (let word of words) {
        const splited = word.split(separator);
        for (let s of splited) {
            if (s !== "") arr.push(s)
        }
    }
    
    return arr;
};