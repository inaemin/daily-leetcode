/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) return false;
    const alphabet_cnt = new Array(26).fill(0);
    for (let i=0; i<s.length; i++) {
        alphabet_cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    let odd_cnt = 0;
    for (let i=0; i<26; i++) {
        if (alphabet_cnt[i] % 2 === 1) {
            odd_cnt++;
        }
    }
    if (odd_cnt > k) return false;

    return true;
};