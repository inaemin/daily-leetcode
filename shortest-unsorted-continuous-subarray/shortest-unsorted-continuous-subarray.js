/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  // 아래로 볼록인 꼭지점 -> 앞쪽에서 크거나 같은 값을 찾는다.
  // 위로 볼록인 꼭지점 -> 뒤쪽에서 작거나 같은 값을 찾는다.
  let max = null, min = null;
  let status = true;
  for (let i=0; i<nums.length; i++) {
      if (nums[i-1] > nums[i]) status = false;
      if ((nums[i-1] || -Infinity) <= nums[i] && nums[i] >= nums[i+1]) {
          if (max === null) max = i;
          else if (nums[i] >= nums[max]) max = i;
      }
      if ((nums[i-1] || -Infinity) >= nums[i] && nums[i] <= (nums[i+1] || Infinity)) {
          if (min === null) min = i;
          else if (nums[i] <= nums[min]) min = i;
      }
  }

  if (status) return 0; // 이미 sorting되어 있는 경우.
  if (max === null && min === null) return nums.length; // 내림차순으로 sorting되어 있는 경우.  
  if (max === null) return min + 1; // 아래로 볼록만 있는 경우.
  if (min === null) return nums.length - max; // 위로 볼록만 있는 경우.

  let start = min, end = max;
  for (let i=0; i<min; i++) {
      if (nums[i] > nums[min]) {
          start = i;
          break;
      }
  }
  for (let i=nums.length-1; i>=0; i--) {
      if (nums[i] < nums[max]) {
          end = i;
          break;
      }
  }
  return end - start + 1;
};