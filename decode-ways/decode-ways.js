/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const isValid = (s) => {
        return Number(s) >= 10 && Number(s) <= 26;
    }

    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i=len-1; i>=0; i--) {
        if (s[i] === "0") continue;
        if (s[i+1] === "0") {
            if (isValid(s.slice(i, i+2))) dp[i] = dp[i+2] === undefined ? 1 : dp[i+2];
            else return 0;
        }
        else {
            dp[i] += dp[i+1] === undefined ? 1 : dp[i+1]
            if (isValid(s.slice(i, i+2))) dp[i] += dp[i+2] === undefined ? 1 : dp[i+2]
        }
    }

    return dp[0];
};