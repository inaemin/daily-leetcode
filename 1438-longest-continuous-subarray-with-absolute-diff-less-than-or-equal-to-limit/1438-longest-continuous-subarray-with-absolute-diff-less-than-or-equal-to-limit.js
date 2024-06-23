/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    // Monotonic Queue
    // 단조 증가 큐 : array에 value를 추가할 때, 추가할 value보다 큰 element는 모조리 pop
    // 여기는 ascendnig sorting.
    // 단조 감소 큐 : array에 value를 추가할 때, 추가할 value보다 작은 element는 모조리 pop
    // 여기는 descending soring.

    const minQueue = [];
    const maxQueue = [];
    let left = 0;
    let maxLen = 0;

    for (let right=0; right<nums.length; right++) {
        // minQueue 업데이트
        while (minQueue.length && nums[minQueue[minQueue.length-1]] > nums[right]) {
            minQueue.pop()
        }
        minQueue.push(right);
        // maxQueue 업데이트
        while (maxQueue.length && nums[maxQueue[maxQueue.length-1]] < nums[right]) {
            maxQueue.pop()
        }
        maxQueue.push(right);
        // 현재 window가 조건을 만족하지 않는 경우, left를 이동
        while (nums[maxQueue[0]] - nums[minQueue[0]] > limit) {
            left++;
            if (maxQueue[0] < left) {
                maxQueue.shift()
            }
            if (minQueue[0] < left) {
                minQueue.shift()
            }
        }
        maxLen = Math.max(maxLen, right-left+1)
    }

    return maxLen
};