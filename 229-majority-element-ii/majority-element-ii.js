/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const answer = [];

    let i=0;
    while (i < nums.length) {
        let cnt = 1;
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                cnt++;
            } else {
                break;
            }

        }
        if (cnt > n/3) {
            answer.push(nums[i])
        }
        i += cnt;
    }

    return answer;
};