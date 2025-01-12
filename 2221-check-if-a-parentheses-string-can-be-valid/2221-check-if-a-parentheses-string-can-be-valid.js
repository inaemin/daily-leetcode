/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    if (s.length % 2 === 1) return false;

    let parenthese = 0;
    let changable = 0;
    for (let i=0; i<s.length; i++) {
        if (locked[i] === '1') { // 못 바꿈.
            if (s[i] === '(') {
                parenthese++;
            } else {
                parenthese--;
            }
        } else { // 바꿀 수 있음.
            changable++;
        }
        if (parenthese + changable < 0) return false;
    }

    parenthese = 0;
    changable = 0;
    for (let i=s.length-1; i>=0; i--) {
        if (locked[i] === '1') { // 못 바꿈.
            if (s[i] === ')') {
                parenthese++;
            } else {
                parenthese--;
            }
        } else { // 바꿀 수 있음.
            changable++;
        }
        if (parenthese + changable < 0) return false;
    }

    return true;
};