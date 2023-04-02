/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     let start = 0;
//     let end = nums.length-1;
//     let mid;

//     while (start <= end) {
//         mid = (start + end) / 2 | 0;
//         if (nums[mid] === target) return mid;
//         else if (nums[mid] > target) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return start;

// };

// const searchInsert = (nums, target) => {
//     if (target < nums[0]) return 0;
//     for (let i=0; i<nums.length; i++) {
//         if (target === nums[i]) return i;
//         if (nums[i] < target && nums[i+1] > target) return i+1;
//     }
//     return nums.length;
// }

const searchInsert = (nums, target) => {
    for (let i=0; i<nums.length; i++) {
        if (target === nums[i] || target < nums[i]) return i;
    }
    return nums.length;
}