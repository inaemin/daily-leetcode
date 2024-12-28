/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const sum = [];
    let part_sum = 0;
    for (let i=0; i<k; i++) {
        part_sum += nums[i];
    }
    sum.push(part_sum);
    for (let i=1; i<nums.length-k+1; i++) {
        part_sum = part_sum - nums[i-1] + nums[i+k-1];
        sum.push(part_sum);
    }

    const maxSumFromLeft = []; // 왼쪽부터 시작해서 subarray의 합이 제일 큰 인덱스를 저장.
    const maxSumFromRight = []; // 오른쪽부터 시작해서 subarray의 합이 제일 크커나 같은 인덱스를 저장.
    let left = 0, right = 0;
    for (let i=0; i<sum.length; i++) {
        if (sum[i] > left) {
            maxSumFromLeft.push(i);
            left = sum[i];
        } else {
            maxSumFromLeft.push(maxSumFromLeft[i-1]);
        }
    }
    for (let i=sum.length-1; i>=0; i--) {
        if (sum[i] >= right) {
            maxSumFromRight[i] = i;
            right = sum[i];
        } else {
            maxSumFromRight[i] = maxSumFromRight[i+1];
        }
    }

    // 가운데 subarray 찾기
    let max = 0;
    let ans;
    for (let i=k; i<=nums.length-2*k; i++) {
        const arr_sum = sum[i] + sum[maxSumFromLeft[i-k]] + sum[maxSumFromRight[i+k]];
        if (max < arr_sum) {
            max = arr_sum;
            ans = [maxSumFromLeft[i-k], i, maxSumFromRight[i+k]];
        }
    }
    return ans;
};