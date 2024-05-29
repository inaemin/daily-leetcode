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
                if (s[i] === '1' && carry === '1') {
                    newS = '0' + newS;
                    carry = '1';
                } else if (s[i] === '1' && carry === '0') {
                    newS = '1' + newS;
                    carry = '0';
                } else if (s[i] === '0' && carry === '1') {
                    newS = '1' + newS;
                    carry = '0';
                } else if (s[i] === '0' && carry === '0') {
                    newS = '0' + newS;
                    carry = '0';
                }
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