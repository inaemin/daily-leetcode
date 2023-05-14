/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    const n = derived.length;
    const original = [0];
    for (let i=0; i<n; i++) {
        if (i === n-1) {
            if (derived[i] === 0) {
                return original[i] === original[0] ? true : false;
            }
            if (derived[i] === 1) {
                return original[i] === original[0] ? false : true;
            }
        } else original[i+1] = derived[i] === 0 ? original[i] : original[i] === 0 ? 1 : 0;    
    }    
};