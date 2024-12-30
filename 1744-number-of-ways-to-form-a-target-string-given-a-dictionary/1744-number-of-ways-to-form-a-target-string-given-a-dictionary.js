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
    const dp = Array.from({length: target_len}, () => new Array(word_len).fill(0));

    for (let i=0; i<target_len; i++) {
        for (let j=i; j<word_len; j++) {
            if (i === 0) {
                dp[i][j] = (dp?.[i]?.[j-1] || 0) + (char_cnt_arr?.[j]?.[target[i]] || 0);
            } else {
                dp[i][j] = dp[i][j-1] + dp[i-1][j-1] * (char_cnt_arr?.[j]?.[target[i]] || 0);
            }
            dp[i][j] %= mod;
        }
    }

    return dp.at(-1).at(-1);
};