/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const gcd = (m, n) => {
        if (m % n === 0) return n;
        return gcd(n, m%n);
    }

    return gcd(max, min);
};