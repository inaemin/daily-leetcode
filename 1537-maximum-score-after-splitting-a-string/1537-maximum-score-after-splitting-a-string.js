/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zero_cnt = 0;
    let one_cnt = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === '0') {
            zero_cnt++;
        } else {
            one_cnt++;
        }
    }

    let left = 0, right = one_cnt;
    let score = 0;
    for (let i=0; i<s.length-1; i++) {
        if (s[i] === '0') {
            left++;
        } else {
            right--;
        }
        score = Math.max(score, left + right);
    }
    return score;
};