/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 === 1) {
            if (arr[i+1] % 2 === 1 && arr[i+2] % 2 === 1) {
                return true;
            }
        }
        i++;
    }
    return false;
};