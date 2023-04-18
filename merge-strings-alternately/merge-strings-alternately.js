/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0;
    const w1 = word1.split("")
    const w2 = word2.split("")
    const result = []
    while (w1[i] || w2[i]) {
        if (w1[i]) result.push(w1[i])
        if (w2[i]) result.push(w2[i])
        i += 1;
    }
    return result.join("")
};