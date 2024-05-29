/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let num = BigInt("0b" + s);
    let steps = 0;

    while (num > 1n) {
        if (num & 1n) { // 현재 비트가 1인지의 여부
            // 현재 비트가 1인 경우, 1을 더합니다 (올림 처리)
            num += 1n;
        } else {
            // 현재 비트가 0인 경우, 2로 나눕니다 (오른쪽 시프트)
            num >>= 1n;
        }
        steps++;
    }

    return steps;
};