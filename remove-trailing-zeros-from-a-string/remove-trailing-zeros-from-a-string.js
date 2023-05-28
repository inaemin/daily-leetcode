/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    const arr = [...num];
    while (arr[arr.length-1] === "0") {
        arr.pop();
    }
    return arr.join("")
};