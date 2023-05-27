/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    const gcd = (n1, n2) => {
        const max = n1 >= n2 ? n1 : n2;
        const min = n1 >= n2 ? n2 : n1;
        if (max % min === 0) return min;
        return gcd(min, max % min);
    }

    let answer = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === k) answer += 1;
        let prev = nums[i];
        let next = i+1;
        while (next < nums.length) {
            prev = gcd(prev, nums[next]);
            if (prev === k) answer += 1;
            next += 1;
        }
    }

    return answer;
};