/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const mod = 10**9 + 7;
    const map = new Map()
    words.forEach((word) => {
        word.split("").forEach((el, idx) => {
            if (map.has(el) && map.get(el)[idx]) {
                map.get(el)[idx]++
            } else if (map.has(el)) {
                map.get(el)[idx] = 1;
            } else { map.set(el, {[idx]: 1}); }
        })
    })
    if (target.length === 1) return Object.values(map.get(target)).reduce((r, e) => r+e, 0);

    const m = target.length
    const n = Number(Object.keys(map.get(target[target.length-1])).at(-1))+1
    const dp = [...Array(m)].map(el => new Array(n).fill(0));
    if (map.get(target[0])[0]) dp[0][0] = map.get(target[0])[0]
    for (let i=1; i<n; i++) {
        if (map.get(target[0])[i]) dp[0][i] = dp[0][i-1] + map.get(target[0])[i]
        else dp[0][i] = dp[0][i-1]
    }
    const start = Number(Object.keys(map.get(target[0]))[0]);
    for (let i=1; i<target.length; i++) {
        for (let j=start+i; j<n; j++) {
            if (map.has(target[i]) && map.get(target[i])[j] !== undefined) {
                dp[i][j] = (dp[i][j-1] + dp[i-1][j-1]*map.get(target[i])[j]) % mod
            } else {
                dp[i][j] = dp[i][j-1];
            }
        }
    }
    console.log(dp)
    return dp[m-1][n-1] % mod;
};