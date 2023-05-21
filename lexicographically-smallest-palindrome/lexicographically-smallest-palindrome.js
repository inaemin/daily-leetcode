/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const arr = [...s];
    // arr.length가 홀수라면
    if (arr.length % 2 === 1) {
        const middle = Math.floor(arr.length/2);
        for (let i=1; i<=middle; i++) {
            if (arr[middle-i] !== arr[middle+i]) {
                if (arr[middle-i].charCodeAt(0) < arr[middle+i].charCodeAt(0)) arr[middle+i] = arr[middle-i];
                else arr[middle-i] = arr[middle+i];
            }
        }
    }
    // arr.length가 짝수라면
    else {
        const p1 = arr.length/2 - 1;
        const p2 = arr.length/2;
        for (let i=0; i<=p1; i++) {
            if (arr[p1-i] !== arr[p2+i]) {
                if (arr[p1-i].charCodeAt(0) < arr[p2+i].charCodeAt(0)) arr[p2+i] = arr[p1-i];
                else arr[p1-i] = arr[p2+i];
            }
        }
    }
    return arr.join("");
};