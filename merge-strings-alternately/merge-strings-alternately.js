/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0;
    const result = []
    while (word1[i] || word2[i]) {
        if (word1[i]) result.push(word1[i])
        if (word2[i]) result.push(word2[i])
        i += 1;
    }
    return result.join("")
};