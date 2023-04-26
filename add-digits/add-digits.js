/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
        num = num.toString().split("").reduce((r, e) => r + Number(e), 0)
    }
    return num;
}