/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const oddIdx = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] % 2 === 1) oddIdx.push(i)
    }
    if (oddIdx.length < k) return 0;
    
    let ans = 0;
    for (let i=0; i<=oddIdx.length-k; i++) {
        let start = oddIdx[i] - (oddIdx[i-1] !== undefined ? oddIdx[i-1] : -1)
        let end = (oddIdx[i+k] !== undefined ? oddIdx[i+k] : nums.length) - oddIdx[i+k-1]
        ans += start * end
    }
    return ans;
};