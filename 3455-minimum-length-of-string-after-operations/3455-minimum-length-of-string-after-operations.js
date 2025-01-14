/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    // 2로 나눴을 때 나머지만큼 남음. 1이면 1개 남음, 0이면 2개 남음.
    const alphabet_cnt = new Array(26).fill(0);
    for (let i=0; i<s.length; i++) {
        alphabet_cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    let cnt = 0;
    for (let i=0; i<26; i++) {
        if (alphabet_cnt[i] > 0) {
            cnt += alphabet_cnt[i] % 2 === 1 ? 1 : 2;
        }
    }

    return cnt;
};