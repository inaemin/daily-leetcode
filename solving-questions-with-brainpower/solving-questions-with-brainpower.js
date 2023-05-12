/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const dp = [...Array(2)].map(el => new Array(questions.length).fill(0));
    let max = 0;
    for (let i=0; i<questions.length; i++) {
        const [point, rest] = questions[i]
        dp[1][i] = Math.max(dp[1][i-1] || 0, dp[1][i])
        dp[0][i] = dp[1][i] + point;
        if (dp[0][i] > max) max = dp[0][i];
        if (i+rest+1 < questions.length) {
            dp[1][i+rest+1] = Math.max(dp[0][i], dp[1][i+rest+1]);
        }
    }

    return max;
};