/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length % k !== 0) return false;
    const hash = {} // 숫자 카운트하여 해시 테이블에 저장.
    for (let i=0; i<nums.length; i++) {
        hash[nums[i]] = (hash?.[nums[i]] || 0) + 1;
    }

    let groupCount = nums.length / k | 0; // 총 그룹의 수.
    const keys = Object.keys(hash)
    let start = 0; // 그룹 시작 인덱스.
    while (groupCount > 0) {
        let cnt = k;
        let i = start;
        while (cnt > 0) {
            if (!hash[keys[i]]) {
                return false; // 이미 카운트가 0인 경우.
            }
            if (cnt !== k && +keys[i] !== +keys[i-1] + 1) {
                return false; // 연속적인 숫자가 아닌 경우.
            }
            hash[keys[i]]--;
            if (!hash[keys[i]]) {
                start++; // 카운트가 0가 되면 다음 group의 start 인덱스 증가.
            }
            cnt--;
            i++;
        }
        groupCount--;
    }
    return true;
};