/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const n = questions.length;
    const dp = Array(n+1).fill(0);
    for (let i=n-1; i>=0; i--) {
        let j = Math.min(n, i+questions[i][1]+1);
        dp[i] = Math.max(dp[i+1], dp[j]+questions[i][0])
    }

    return dp[0];
};