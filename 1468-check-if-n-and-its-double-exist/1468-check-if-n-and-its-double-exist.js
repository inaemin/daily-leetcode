/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const obj = new Map();
    for (let i=0; i<arr.length; i++) {
        const ele = arr[i];
        if (obj.has(ele/2) || obj.has(ele*2)) {
            return true;
        }
        obj.set(ele, i);
    }
    return false;
};