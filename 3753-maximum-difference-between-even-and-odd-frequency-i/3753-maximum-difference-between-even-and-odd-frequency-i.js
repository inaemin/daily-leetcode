/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const alphabets = new Array(26).fill(0);
    for (let i=0; i<s.length; i++) {
        let idx = s[i].charCodeAt() - 'a'.charCodeAt();
        alphabets[idx]++;
    }
    let max_even = -1, min_even = 100, max_odd = -1;
    for (let i=0; i<26; i++) {
        if (alphabets[i] === 0) continue;
        if (alphabets[i] % 2 === 1) {
            max_odd = Math.max(max_odd, alphabets[i]);
        } else {
            min_even = Math.min(min_even, alphabets[i]);
            max_even = Math.max(max_even, alphabets[i]);
        }
    }
    if (max_odd - max_even > max_odd - min_even) return max_odd - max_even;
    return max_odd - min_even;
};