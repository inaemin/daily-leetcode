/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    let flip = 0;
    for (let i=0; i<=n-3; i++) {
        if (nums[i] === 0) {
            for (let j=0; j<3; j++) {
                nums[i+j] = nums[i+j] ^ 1;
            }
            flip++;
        }
    }

    if (nums[n-2] === 1 && nums[n-1] === 1) return flip;
    return -1;
};