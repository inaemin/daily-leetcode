/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if (typeof o1 !== typeof o2) return false;
    if (typeof o1 !== "object" && typeof o2 !== "object") return o1 === o2;
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;
    if (!o1 && !o2) return true;
    const key = Object.keys(o1);
    const key2 = Object.keys(o2);
    if (key.length !== key2.length) return false;
    for (let i=0; i<key.length; i++) {
        if (!areDeeplyEqual(o1[key[i]], o2[key[i]])) return false;
    }
    return true;
};