/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    nums.sort((a, b) => a - b);
    let answer;
    for (let i=0; i<Math.floor(nums.length/3); i++) {
        if (nums[3*i] === nums[3*i+1] && nums[3*i+1] === nums[3*i+2]) continue;
        else {
            if (nums[3*i] !== nums[3*i+1]) answer = nums[3*i]
            if (nums[3*i+1] !== nums[3*i+2]) answer = nums[3*i+2]
            break;
        }
    }

    if (!answer) return nums[nums.length-1];
    return answer;    
};