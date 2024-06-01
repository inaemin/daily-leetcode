/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    const char = s.split("").map(el => el.charCodeAt())
    let answer = 0;
    for (let i=1; i<s.length; i++) {
        answer += Math.abs(char[i] - char[i-1]);
    }

    return answer;
};