/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) {
    const findPrime = (n) => {
        const res = Array(n+1).fill(true);
        res[0] = false;
        res[1] = false;
        for (let i=2; i<res.length; i++) {
            if (res[i]) {
                for (let j=i*i; j<res.length; j+=i) res[j] = false;
            }
        }
        return res;
    }
    const prime = findPrime(n);
    const result = [];
    for (let i=2; i<=Math.floor(n/2); i++) {
        if (prime[i] && prime[n-i]) result.push([i, n-i]);
    }
    return result;
};