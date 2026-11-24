/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b)
    }

    const lcm = (a, b) => {
        return (a / gcd(a, b)) * b;
    }

    let max_length = 1;
    for (let i=0; i<nums.length; i++) {
        let g = nums[i];
        let l = nums[i];
        let p = nums[i];
        for (let j=i+1; j<nums.length; j++) {
            g = gcd(g, nums[j]);
            l = lcm(l, nums[j]);
            p *= nums[j];
            if ((g*l === p) && (j-i+1 > max_length)) {
                max_length = j-i+1;
            }
        }
    }

    return max_length;
};