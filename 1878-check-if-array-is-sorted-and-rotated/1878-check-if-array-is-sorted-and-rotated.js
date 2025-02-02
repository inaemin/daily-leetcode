/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let drops = 0;
    const n = nums.length;
    for (let i=0; i<n; i++) {
        // 배열은 순환적이므로 마지막 원소와 첫 원소도 비교함
        if (nums[i] > nums[(i+1) % n]) {
            drops++;
        }
    }
    return drops <= 1;
};