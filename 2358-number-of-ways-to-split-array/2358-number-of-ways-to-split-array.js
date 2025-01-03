/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    // 두 부분으로 나눴을 때 왼쪽의 합이 오른쪽의 합보다 크거나 같은 경우
    const sum = nums.reduce((res, ele) => res + ele, 0);
    let left = 0, right = sum;
    let count = 0;
    for (let i=0; i<nums.length-1; i++) {
        left += nums[i];
        right -= nums[i];
        if (left >= right)
            count++;
    }
    return count;
};