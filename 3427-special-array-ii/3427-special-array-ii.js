/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const prefixSum = new Array(nums.length).fill(0);
    for (let i=1; i<nums.length; i++) {
        // i 인덱스까지의 special parity가 아닌 쌍의 수.
        const left = nums[i-1] % 2;
        const right = nums[i] % 2;
        if (left === right) {
            prefixSum[i] = prefixSum[i-1] + 1;
        } else {
            prefixSum[i] = prefixSum[i-1];
        }
    }

    for (let i=0; i<queries.length; i++) {
        const [from, to] = queries[i];
        // prefixSum[to] - prefixSum[from]이 0이면
        // special parity가 없다는 뜻이므로 true
        // 0이 아니면 false
        queries[i] = prefixSum[to] - prefixSum[from] === 0 ? true : false;
    }

    return queries;
};