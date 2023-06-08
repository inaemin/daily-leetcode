/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    // knapsack?!
    const result = [0];
    for (let i=1; i<=s.length; i++) {
        result[i] = result[i-1] + 1;
        dictionary.forEach((word) => {
            if (word.length <= i) {
                if (word === s.slice(i-word.length, i)) {
                    result[i] = Math.min(result[i-word.length], result[i]);
                }
            }
        })
    }
    
    return result[result.length-1];
};