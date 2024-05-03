/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1_arr = version1.split(".").map(Number);
    while (v1_arr.length && !v1_arr.at(-1)) v1_arr.pop();
    const v2_arr = version2.split(".").map(Number);
    while (v2_arr.length && !v2_arr.at(-1)) v2_arr.pop();
    for (let i=0; i<Math.max(v1_arr.length, v2_arr.length); i++) {
        if (v1_arr[i] > (v2_arr?.[i] || 0)) return 1;
        if ((v1_arr?.[i] || 0) < v2_arr[i]) return -1;
    }
    return 0;
};