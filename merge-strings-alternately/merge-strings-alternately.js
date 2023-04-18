/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0;
    let answer = ""
    while (word1[i] || word2[i]) {
        if (word1[i]) answer += word1[i]
        if (word2[i]) answer += word2[i]
        i += 1;
    }
    return answer;
};