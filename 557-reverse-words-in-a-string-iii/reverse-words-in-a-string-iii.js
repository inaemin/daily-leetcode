/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const strArr = s.split(" ");
    const arr = [];
    strArr.forEach((el) => {
        arr.push(el.split("").reverse().join(""));
    })
    return arr.join(" ")
};