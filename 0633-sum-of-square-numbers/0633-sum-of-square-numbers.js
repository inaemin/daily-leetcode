/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const root = Math.floor(c**0.5);
    const arr = Array.from({length: root+1}, (_, i) => i**2);
    let i=0;
    let j=arr.length-1;
    while (i<=j) {
        if (arr[i] + arr[j] === c) {
            return true;
        } else if (arr[i] + arr[j] < c) {
            // i 오른쪽 이동
            i++;
        } else if (arr[i] + arr[j] > c) {
            // j 왼쪽 이동
            j--;
        }
    }
    return false;
};