/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    /**
    k 이상인 숫자가 nums에 k개 이상이면 그 array는 special 하다. k를 구하라.
    1. nums 오름차순 정렬
    2. 마지막 방문 숫자 기억 last_visited
    3. for문을 돌면서 nums[i]가 nums.length-i보다 크거나 같고, 마지막 방문 숫자보다 nums.length-i가 크다면 nums.length-i를 answer로 설정.
     */
    nums.sort((a, b) => a - b);
    let answer = -1;
    let last_visited = -1;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] >= nums.length - i && nums.length - i > last_visited) {
            answer = nums.length - i
            return answer;
        }
        last_visited = nums[i]
    }

    return answer;
};