/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const dividedByK = nums.reduce((a, e) => {
        a.push(((a?.[a.length-1] || 0) + e) % k)
        return a;
    }, []);

    const hash = {};
    for (let i=0; i<dividedByK.length; i++) {
        if (i !== 0 && dividedByK[i] === 0) {
            return true
        } else if (hash[dividedByK[i]]) {
            if (i - hash[dividedByK[i]][0] > 1) return true;
            hash[dividedByK[i]].push(i)
        } else {
            hash[dividedByK[i]] = [i];
        }
    }

    return false;
};