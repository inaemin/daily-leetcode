/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    // 특정 범위 사이에서의 유니크한 문자 개수
    let cnt = 0;
    const visit_start_end = new Array(26).fill(0);
    for (let i=0; i<s.length; i++) {
        const start_end = s[i].charCodeAt() - 'a'.charCodeAt();
        if (visit_start_end[start_end] === 1)
            continue;

        let end = 0;
        for (let j=s.length-1; j>i+1; j--) {
            if (s[i] === s[j]) {
                end = j;
                break;
            }
        }

        const visit = new Array(26).fill(0);
        for (let k=i+1; k<end; k++) {
            const char_num = s[k].charCodeAt() - 'a'.charCodeAt();
            if (visit[char_num] === 0) {
                cnt++;
                visit[char_num] = 1;
            }
        }

        visit_start_end[start_end] = 1;
    }

    return cnt;
};