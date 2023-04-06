/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    }

    let answer = 0;
    let position = 0;
    while (position < s.length) {
        if (symbols[s.slice(position, position + 2)]) {
            answer += symbols[s.slice(position, position + 2)]
            position += 2;
        } else {
            answer += symbols[s.slice(position, position + 1)]
            position += 1;
        }
    }

    return answer;
};