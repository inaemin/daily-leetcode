/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const mod = 10**9 + 7;
    const word_len = words[0].length;
    const n = words.length;
    const char_cnt_arr = []
    for (let i=0; i<word_len; i++) {
        const cnt = {}
        for (let j=0; j<n; j++) {
            cnt[words[j][i]] = (cnt[words[j][i]] || 0) + 1;
        }
        char_cnt_arr.push(cnt);
    }

    const target_len = target.length;
    const dp = new Array(target_len+1).fill(0);
    dp[0] = 1;
    for (let i=0; i<word_len; i++) {
        for (let j=target_len-1; j>=0; j--) {
            // words의 i번째 위치하는 target의 j번째 글자의 결과는 j+1에 저장됨.
            dp[j+1] = (dp[j+1] + dp[j] * (char_cnt_arr[i]?.[target[j]] || 0)) % mod;
        }
    }

    return dp.at(-1);
};