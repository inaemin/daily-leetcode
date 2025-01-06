/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const operation = boxes.split("").map(el => +el);
    const acc_operation = operation.reduce((res, ele) => {
        let cnt = res.at(-1) || 0;
        if (ele === 1) {
            cnt++;
        }
        res.push(cnt);
        return res;
    }, [])

    const result = new Array(boxes.length).fill(0);
    let left = 0, right = operation.reduce((res, ele, idx) => res + ele * idx, 0);
    result[0] = left + right - 0 * operation[0];
    for (let i=1; i<boxes.length; i++) {
        left += operation[i-1] + (acc_operation[i-2] || 0) // i-2 이전에 있는 1의 개수
        right -= operation[i] + (acc_operation.at(-1) - acc_operation[i]) // i+1 이후에 있는 1의 개수
        result[i] = left + right;
    }

    return result;
};