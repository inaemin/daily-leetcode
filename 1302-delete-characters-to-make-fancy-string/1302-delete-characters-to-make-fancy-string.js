/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let answer = "";
    for (let i=0; i<s.length; i++) {
        let character = s[i];
        let cnt = 1;
        for (let j=i+1; j<s.length; j++) {
            if (s[j] === character) {
                cnt++;
            } else {
                break;
            }
        }
        if (cnt >= 3) {
            answer += character.repeat(2);
        } else {
            answer += character.repeat(cnt);
        }
        i += cnt-1;
    }
    return answer;
};