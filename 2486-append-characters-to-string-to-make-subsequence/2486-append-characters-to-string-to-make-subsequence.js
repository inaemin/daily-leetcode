/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let t_pointer = 0;
    for (let s_pointer=0; s_pointer<s.length; s_pointer++) {
        if (s[s_pointer] === t[t_pointer]) {
            t_pointer++;
        }
    }
    return t.length - t_pointer;
};