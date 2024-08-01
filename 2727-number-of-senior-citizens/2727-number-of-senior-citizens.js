/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let cnt = 0;
    for (let detail of details) {
        if (Number(detail.slice(-4, -2)) > 60) {
            cnt++;
        }
    }
    return cnt;
};