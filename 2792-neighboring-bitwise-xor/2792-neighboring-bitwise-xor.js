/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    const original = [1];
    for (let i=0; i<derived.length-1; i++) {
        if (derived[i] === 1) {
            original.push(original[original.length-1] === 0 ? 1 : 0);
        } else {
            original.push(original[original.length-1] === 0 ? 0 : 1);
        }
    }
    if (original[original.length-1] ^ original[0] === derived[derived.length-1])
        return true;
    return false;
};