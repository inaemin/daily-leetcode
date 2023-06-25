/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    let answer = 0;
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            const first_digit = Number(String(nums[i])[0]);
            const last_digit = Number(String(nums[j]).at(-1));
            if (gcd(Math.max(first_digit, last_digit), Math.min(first_digit, last_digit)) === 1) answer++;
        }
    }
    return answer;
};