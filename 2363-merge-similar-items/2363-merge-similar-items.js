/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const hash = {};
    for (let [val, wei] of [...items1, ...items2]) {
        hash[val] = (hash?.[val] || 0) + wei;
    }
    return Object.entries(hash)
};