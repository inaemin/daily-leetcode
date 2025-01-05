/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const delta = new Array(s.length+1).fill(0);
    for (let [start, end, direction] of shifts) {
        switch (direction) {
            case 1: // 다음 알파벳
                delta[start] += 1;
                delta[end+1] -= 1;
                break;
            case 0: // 이전 알파벳
                delta[start] -= 1;
                delta[end+1] += 1;
                break;
        }
    }
    // 누적처리 해주기
    for (let i=0; i<delta.length-1; i++) {
        delta[i+1] += delta[i];
    }

    const result = new Array(s.length);
    for (let i=0; i<s.length; i++) {
        let change = (s[i].charCodeAt() - 97 + delta[i]) % 26;
        if (change < 0)
            change += 26;
        result[i] = String.fromCharCode(97 + change);
    }
    return result.join('');
};