/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let cnt = 0;
    while (s.length > 1) {
        if (s.endsWith('0')) {
            s = s.slice(0, -1);
        } else {
            let newS = ""
            let carry = '1'
            for (let i=s.length-1; i>=0; i--) {
                if (s[i] === '1' && carry === '1') {
                    newS = '0' + newS
                    carry = '1'
                } else if (s[i] === '1' && carry === '0') {
                    newS = '1' + newS;
                    carry = '0'
                } else if (s[i] === '0' && carry === '1') {
                    newS = '1' + newS;
                    carry = '0'
                } else if (s[i] === '0' && carry === '0') {
                    newS = '0' + newS;
                    carry = '0'
                }
            }
            if (carry === '1') {
                s = carry + newS;
            } else {
                s = newS
            }
        }
        cnt++;
    }

    return cnt;
};