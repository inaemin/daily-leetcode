/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowel = ["a", "e", "i", "o", "u"];
    const s_arr = [...s];
    let max = 0;
    for (let i=0; i<k; i++) {
        if (vowel.includes(s_arr[i])) max += 1;
    }

    let curr = max;
    for (let i=k; i<s_arr.length; i++) {
        if (vowel.includes(s_arr[i-k])) curr -= 1;
        if (vowel.includes(s_arr[i])) curr += 1;
        if (curr > max) max = curr;
    }

    return max;
};