/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let answer = 0;
    for (let i=1; i<s.length; i++) {
        answer += Math.abs(s[i].charCodeAt() - s[i-1].charCodeAt());
    }

    return answer;
};