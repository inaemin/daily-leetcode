/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let cnt = 0;
    while (s.length > 1) {
        if (s.endsWith('0')) {
            // 문자열이 '0'으로 끝나면 마지막 비트를 제거
            s = s.slice(0, -1);
        } else {
            // 문자열이 '1'으로 끝나면 1을 더하기
            let newS = "";
            let carry = '1';
            for (let i = s.length - 1; i >= 0; i--) {
                let n = s[i] !== carry ? '1' : '0'
                newS = n + newS;
                carry = (s[i] === carry && s[i] === '1') ? '1' : '0';
            }
            if (carry === '1') {
                s = '1' + newS;
            } else {
                s = newS;
            }
        }
        cnt++;
    }

    return cnt;
};