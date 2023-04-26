/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString()
    while (num.length > 1) {
        num = num.split("").reduce((r, e) => r + Number(e), 0).toString()
    }
    return Number(num);
};