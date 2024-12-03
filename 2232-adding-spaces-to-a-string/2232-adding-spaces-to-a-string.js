/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let answer = s.slice(0, spaces[0])
    for (let i=1; i<spaces.length; i++) {
        answer += " "+ s.slice(spaces[i-1], spaces[i])
    }
    answer += " " + s.slice(spaces.at(-1))
    return answer;
};