/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    if (nums[0] === min && nums[nums.length-1] === max) return 0;
    
    let answer = 0;
    let min_idx = nums.indexOf(min);
    while (min_idx !== 0) {
        [nums[min_idx], nums[min_idx-1]] = [nums[min_idx-1], nums[min_idx]];
        min_idx -= 1;
        answer += 1;
    }
    let max_idx = nums.indexOf(max);
    while (max_idx !== nums.length-1) {
        [nums[max_idx], nums[max_idx+1]] = [nums[max_idx+1], nums[max_idx]];
        max_idx += 1;
        answer += 1;
    }
    
    return answer;
};