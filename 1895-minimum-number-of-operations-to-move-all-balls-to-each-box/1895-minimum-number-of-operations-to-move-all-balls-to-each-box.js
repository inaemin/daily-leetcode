/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const operation = boxes.split("").map(Number); // '1', '0'을 숫자로 변환
    const result = new Array(n).fill(0);

    // 왼쪽에서 오른쪽으로 작업 수 계산
    let leftCount = 0; // 왼쪽에서 만난 공의 개수
    let leftOps = 0; // 왼쪽에서의 작업 수
    for (let i=0; i<n; i++) {
        result[i] += leftOps; // 왼쪽 작업 수 추가
        leftCount += operation[i]; // 현재 상자의 공 개수 추가
        leftOps += leftCount; // 다음 상자로 이동할 때 작업 수 증가
    }

    // 오른쪽에서 왼쪽으로 작업 수 계산
    let rightCount = 0; // 오른쪽에서 만난 공의 개수
    let rightOps = 0; // 오른쪽에서의 작업 수 
    for (let i=n-1; i>=0; i--) {
        result[i] += rightOps; // 오른쪽 작업 수 추가
        rightCount += operation[i]; // 현재 상자의 공 개수 추가
        rightOps += rightCount; // 다음 상자로 이동할 때 작업 수 증가
    }

    return result;
};