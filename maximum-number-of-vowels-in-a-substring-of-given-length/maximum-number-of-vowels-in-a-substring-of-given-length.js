/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowel = ["a", "e", "i", "o", "u"];
    const s_arr = [...s];
    const substring = [...s.slice(0, k)];
    let max = 0;
    for (let s of substring) {
        if (vowel.includes(s)) max += 1;
    }

    let curr = max;
    for (let i=k; i<s_arr.length; i++) {
        if (vowel.includes(substring[0])) curr -= 1;
        if (vowel.includes(s_arr[i])) curr += 1;
        if (curr > max) max = curr;
        substring.shift();
        substring.push(s_arr[i]);
    }

    return max;
};