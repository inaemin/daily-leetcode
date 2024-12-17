/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
    const alphabets = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const num = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        alphabets[num]++;
    }

    let answer = "";
    let i = 25;
    while (i >= 0) {
        if (!alphabets[i]) {
            i--;
            continue;
        }
        const addNum = Math.min(alphabets[i], repeatLimit);
        answer += String.fromCharCode(i + 97).repeat(addNum);
        alphabets[i] -= addNum;
        if (alphabets[i]) {
            let j = i - 1;
            while (j >= 0) {
                if (alphabets[j]) {
                    answer += String.fromCharCode(j + 97);
                    alphabets[j]--;
                    break;
                } else {
                    j--;
                }
            }
            if (j === -1) {
                return answer;
            }
        }
    }
    return answer;
};