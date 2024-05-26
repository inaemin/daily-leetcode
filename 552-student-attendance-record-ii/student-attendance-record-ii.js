/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
    const mod = 10 ** 9 + 7;
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => Array(3).fill(0)));
    dp[0][0][0] = 1;
    for (let i=1; i<=n; i++) {
        for (let j=0; j<2; j++) {
            for (let k=0; k<3; k++) {
                // P 추가
                dp[i][j][0] = (dp[i][j][0] + dp[i-1][j][k]) % mod;
                // A 추가
                if (j<1) {
                    dp[i][j+1][0] = (dp[i][j+1][0] + dp[i-1][j][k]) % mod;
                }
                // L 추가
                if (k<2) {
                    dp[i][j][k+1] = (dp[i][j][k+1] + dp[i-1][j][k]) % mod;
                }
            }
        }
    }
    
    let result = 0;
    for (let j=0; j<2; j++) {
        for (let k=0; k<3; k++) {
            result = (result + dp[n][j][k]) % mod;
        }
    }

    return result;
};