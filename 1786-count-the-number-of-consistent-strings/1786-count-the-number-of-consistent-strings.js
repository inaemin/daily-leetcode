/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set([...allowed.split("")]);
    let count = 0;
    for (let word of words) {
        let hasChar = true;
        for (let i=0; i<word.length; i++) {
            if (!set.has(word[i])) {
                hasChar = false;
            }
        }
        if (hasChar) {
            count++;
        }
    }
    return count;
};