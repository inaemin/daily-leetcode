/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;
    for (let log of logs) {
        if (log === "../") {
            if (depth > 0) depth -= 1;
            else continue;
        } else if (log === "./") {
            continue;
        } else {
            depth += 1;
        }
    }
    return depth;
};