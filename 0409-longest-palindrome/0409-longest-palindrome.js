/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const obj = {};
    for (let i=0; i<s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }

    const keys = Object.keys(obj);
    let length = 0;
    let isOdd = false;
    for (let i=0; i<keys.length; i++) {
        const cnt = obj[keys[i]];
        if (Math.floor(cnt/2) > 0) {
            length += Math.floor(cnt/2) * 2;
            if (cnt % 2 === 1) {
                isOdd = true;
            }
        } else {
            isOdd = true;
        }
    }
    return isOdd ? length + 1 : length;
};