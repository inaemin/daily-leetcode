/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    // 1 ^ 1 = 0
    // 1 ^ 0 = 1
    let original = 1;
    for (let i=0; i<derived.length; i++) {
        if (derived[i] === 1) {
            original ^= 1;
        }
    }
    if (original === 1)
        return true;
    return false;
};