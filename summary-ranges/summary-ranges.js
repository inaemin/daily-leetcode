/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    nums.push(null);
    const answer = [];
    let start = nums[0];
    let prev = nums[0];
    let end = nums[0];
    for (let i=1; i<nums.length; i++) {
        if (nums[i] === prev + 1) {
            prev = nums[i];
        } else {
            end = nums[i-1];
            if (start === end) answer.push(`${start}`);
            else answer.push(`${start}->${end}`);
            start = nums[i];
            prev = nums[i];
            end = nums[i];
        }
    }
    if (start === end) answer.push(`${start}`);
    else answer.push(`${start}->${end}`);
    answer.pop();
    return answer;
};