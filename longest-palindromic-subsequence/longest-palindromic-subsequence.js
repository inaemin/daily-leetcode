/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // dynamic programming
    const findPalindrome = (s1, s2) => {
        /*
        if (s1[i] === s2[j]) 1 + LCS(i-1, j-1)
        else Math.max(LCS(i-1, j), LCS(i, j-1))
        */
        const dp = [...Array(s2.length+1)].map(el => Array(s1.length+1).fill(0))
        for (let i=1; i<=s1.length; i++) {
            for (let j=1; j<=s2.length; j++) {
                if (s1[i-1] === s2[j-1]) {
                    dp[j][i] = dp[j-1][i-1] + 1;
                } else {
                    dp[j][i] = Math.max(dp[j-1][i], dp[j][i-1]);
                }
            }
        }
        console.log(dp)
        return dp[s2.length][s1.length];
    }

    return findPalindrome(s, s.split("").reverse().join(""))
};