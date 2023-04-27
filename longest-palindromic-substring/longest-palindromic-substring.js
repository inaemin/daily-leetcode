/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = [...Array(s.length)].map(el => new Array(s.length).fill(0));
    let max_i=0, max_j=0, max=0;
    for (let c=0; c<s.length; c++) {
        for (let i=0; i<s.length; i++) {
            if (c === 0) dp[i][i+c] = 1;
            else if (c === 1 && i+c < s.length) {
                dp[i][i+c] = s[i] === s[i+c] ? 2 : 0;
            }
            else if (i+c < s.length && s[i] === s[i+c] && dp[i+1][i+c-1] !== 0) {
                dp[i][i+c] = dp[i+1][i+c-1] + 2;
            }

            if (dp[i][i+c] > max) {
                max_i = i;
                max_j = i+c;
                max = dp[i][i+c];
            }
        }
    }

    return s.slice(max_i, max_j+1);    
};