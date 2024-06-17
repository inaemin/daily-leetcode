/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const root = Math.floor(c**0.5);
    let i=0;
    let j=root;
    while (i<=j) {
        if (i**2 + j**2 === c) {
            return true;
        } else if (i**2 + j**2 < c) {
            // i 오른쪽 이동
            i++;
        } else if (i**2 + j**2 > c) {
            // j 왼쪽 이동
            j--;
        }
    }
    return false;
};