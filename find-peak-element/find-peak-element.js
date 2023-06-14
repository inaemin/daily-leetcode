/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left=0, right=nums.length-1;
    while (left <= right) {
        const middle = Math.floor((left+right)/2);
        if (nums[middle] > (nums[middle-1] || -Infinity) && nums[middle] > (nums[middle+1] || -Infinity)) return middle;
        else if (nums[middle] > (nums[middle-1] || -Infinity)) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
};