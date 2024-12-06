/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let l = 0;
    let r = 0;
    for (let i=0; i<start.length; i++) {
        if (start[i] === 'R') r--;
        if (target[i] === 'L') l--;
        if (r < 0 && l < 0) return false;

        if (start[i] === 'L') l++;
        if (target[i] === 'R') r++;
        if (r > 0 || l > 0) return false;
    }

    return l === 0 && r === 0;
};