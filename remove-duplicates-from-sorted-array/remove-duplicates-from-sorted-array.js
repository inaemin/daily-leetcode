/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let cnt = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== nums[cnt]) cnt +=1;
        nums[cnt] = nums[i];
    }
    return cnt + 1;
}