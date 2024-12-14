/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
    // 큐에 추가할때, 추가하는 숫자보다 큰 것들은 전부 pop() (단조증가큐)
    // 추가하는 숫자보다 작은 것들은 전부 pop() (단조감소큐)

    const ascendingQueue = []
    const descendingQueue = []
    let start = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        while (ascendingQueue.length && ascendingQueue[ascendingQueue.length - 1] > num) {
            ascendingQueue.pop();
        }
        ascendingQueue.push(nums[i]);
        while (descendingQueue.length && descendingQueue[descendingQueue.length - 1] < num) {
            descendingQueue.pop();
        }
        descendingQueue.push(nums[i]);
        while (descendingQueue[0] - ascendingQueue[0] > 2) {
            if (ascendingQueue[0] === nums[start]) {
                ascendingQueue.shift();
            }
            if (descendingQueue[0] === nums[start]) {
                descendingQueue.shift();
            }
            start++;
        }
        count += i - start + 1;
    }
    return count;
};