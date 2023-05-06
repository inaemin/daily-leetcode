/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const mod = BigInt(10 ** 9 + 7);
    let answer = BigInt(0);
    nums.sort((a, b) => a - b);
    for (let i=0; i<nums.length; i++) {
        let min = i, max = i;
        for (let j=i; j<nums.length; j++) {
            if (nums[min] + nums[j] > target) {
                max = j-1;
                break;
            } else max = j;
        }
        console.log(min, max);
        if (min <= max) {
            let len = max - min;
            if (len === 0) answer += BigInt(1);
            else answer += BigInt(2) ** BigInt(len) % mod;
            console.log(answer);
        }
    }

    return answer % mod;
};