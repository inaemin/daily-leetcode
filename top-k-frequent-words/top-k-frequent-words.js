/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const obj = {};
    for (let word of words) {
        if (obj[word]) obj[word]++;
        else obj[word] = 1;
    }
    return Object.keys(obj).sort((a, b) => {
        if (obj[a] !== obj[b]) return obj[b] - obj[a];
        else return a.localeCompare(b);
    }).slice(0, k);
};