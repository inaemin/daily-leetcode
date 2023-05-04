/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let char = "";
    let max = "";
    let sum = 0;
    for (let i=0; i<colors.length; i++) {
        if (colors[i] !== char) {
            char = colors[i];
            max = neededTime[i];
        } else {
            if (max >= neededTime[i]) {
                sum += neededTime[i];
            } else {
                sum += max;
                max = neededTime[i];
            }
        }
    }

    return sum;
};