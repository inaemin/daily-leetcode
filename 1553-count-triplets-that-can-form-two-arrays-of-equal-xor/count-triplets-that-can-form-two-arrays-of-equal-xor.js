/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    // xor 연산은 다르면 1, 같으면 0을 반환.
    const dp = Array.from({length: arr.length}, () => Array.from({length: arr.length}, () => null))
    for (let i=0; i<arr.length; i++) {
        dp[i][i] = arr[i]
        for (let j=i+1; j<arr.length; j++) {
            dp[i][j] = dp[i][j-1] ^ arr[j];
        }
    }

    let result = 0;
    for (let i=0; i<dp.length; i++) {
        for (let j=i; j<dp.length; j++) {
            const a = dp[i][j];
            for (let m=j+1; m<dp.length; m++) {
                const b = dp[j+1][m]
                if (a === b) {
                    result++;
                }
            }
        }
    }

    return result;
};