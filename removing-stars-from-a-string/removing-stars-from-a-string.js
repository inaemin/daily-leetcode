/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let star = 0;
    let answer = "";
    for (let i=s.length-1; i>=0; i--) {
        if (s[i] !== "*") {
            if (star === 0) {
                answer = s[i] + answer;
            } else {
                star -= 1;
            }
        } else {
            star += 1;
        }
    }

    return answer;
};