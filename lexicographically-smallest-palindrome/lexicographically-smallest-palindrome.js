/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const arr = [...s];
    const middle = Math.floor(arr.length/2);
    for (let i=0; i<=middle; i++) {
        if (arr[i] !== arr[arr.length-1-i]) {
            if (arr[i].charCodeAt(0) < arr[arr.length-1-i].charCodeAt(0)) arr[arr.length-1-i] = arr[i];
            else arr[i] = arr[arr.length-1-i];
        }
    }

    return arr.join("")
};