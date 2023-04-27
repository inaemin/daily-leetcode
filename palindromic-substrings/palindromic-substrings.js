/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const dp = [...Array(s.length)].map(el => new Array(s.length).fill(0));
    for (let c=0; c<s.length; c++) {
        for (let i=0; i<s.length; i++) {
            if (c === 0) dp[i][i+c] = 1;
            else if (c === 1 && i+c < s.length && s[i] === s[i+c]) dp[i][i+c] = 2;
            else if (i+c < s.length && s[i] === s[i+c] && dp[i+1][i+c-1] !== 0) dp[i][i+c] = dp[i+1][i+c-1] + 2;
        }
    }

    return dp.flat().filter(el => el !== 0).length;
};