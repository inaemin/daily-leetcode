/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let p1 = 0, p2 = 0;
    while (p2 < str2.length && p1 < str1.length) {
        let isContinue = false;
        for (let i=p1; i<str1.length; i++) {
            let s2 = str2.charCodeAt(p2) - 'a'.charCodeAt(0);
            let s1 = str1.charCodeAt(i) - 'a'.charCodeAt(0);
            if (s2 === (s1 + 1) % 26 || s2 === s1) {
                p2++;
                p1 = i+1;
                isContinue = true;
                break;
            }
        }
        if (!isContinue)
            return false;
    }
    return p2 === str2.length;
};