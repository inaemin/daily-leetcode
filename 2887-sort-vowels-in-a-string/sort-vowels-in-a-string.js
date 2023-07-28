/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const v = ["a", "e", "i", "o", "u"];
    const vowels = [...s].filter(el => v.includes(el.toLowerCase())).sort();
    let j=0;
    const arr = [];
    for (let i=0; i<s.length; i++) {
        if (v.includes(s[i].toLowerCase())) {
            arr.push(vowels[j]);
            j++;
        } else {
            arr.push(s[i]);
        }
    }
    return arr.join("")    
};