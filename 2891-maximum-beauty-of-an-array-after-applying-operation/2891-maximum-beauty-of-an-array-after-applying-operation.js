/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    // nums를 오름차순으로 정렬
    nums.sort((a, b) => a - b);

    // 투포인터를 이용해 A[j] - A[i] <= 2*k를 만족하는 최대 길이를 구함.
    let start = 0;
    let end;
    let maxLength = 1;
    for (let i=1; i<nums.length; i++) {
        // 길이가 maxLength보다 긴 경우에만 업데이트
        if (nums[i] - nums[start] <= 2*k && i - start + 1 > maxLength) {
            end = i;
            maxLength = end - start + 1;
        } else {
            start++;
            end = i;
        }
    }

    return maxLength;
};