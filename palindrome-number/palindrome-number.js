/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if (x >= 0) {
        if (String(x) === String(x).split("").reverse().join("")) return true;
    }
    return false;
};