/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // 전체 XOR 계산
    const AxorB = nums.reduce((a, e) => a ^ e, 0);

    // AxorB에서 첫번째 1이 나타나는 위치 찾기
    let diffBit = 1;
    while ((AxorB & diffBit) === 0) { // 자리에 맞는 비트가 모두 1이어야 1이 됨.
        diffBit <<= 1; // AxorB의 첫 1인 비트를 찾을 때까지 시프트 연산. 1을 왼쪽으로 옮김.
    }

    // 두 그룹으로 나누어 고유한 숫자 찾기
    let firstGroup = 0;
    let secondGroup = 0;
    for (let i=0; i<nums.length; i++) {
        if ((nums[i] & diffBit) !== 0) { // diffBit 자리의 num이 1인 것.
            firstGroup ^= nums[i]
        } else { // diffBit 자리의 num이 0인 것.
            secondGroup ^= nums[i]
        }
    }

    return [firstGroup, secondGroup];
};