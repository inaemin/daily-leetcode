/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binarySearch = (nums, target) => {
        let left = 0;
        let right = nums.length -1;
        while (left <= right) {
            let mid = (left + right) / 2 | 0;
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    const answer = binarySearch(nums, target)
    if (answer === -1) return [-1, -1];
    
    let left = answer;
    let right = answer;
    for (let i=answer-1; i>=0; i--) {
        if (nums[i] === target) {
            left = i;
        } else break;
    }
    for (let i=answer+1; i<nums.length; i++) {
        if (nums[i] === target) {
            right = i;
        } else break;
    }
    return [left, right];
};