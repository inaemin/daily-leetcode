/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const hash = {};
    const concat = `${n}${2*n}${3*n}`;
    for (let s of concat) {
        if (s === "0") return false;
        if (hash[s]) return false;
        hash[s] = true;
    }
    return true;
};