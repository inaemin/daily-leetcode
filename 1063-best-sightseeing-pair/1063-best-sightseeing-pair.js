/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    // values[i] + values[j] + i - j
    // (values[i] + i) + (values[j] - j)
    let max_i = values[0];
    let max_sum = max_i + (values[1] - 1);
    for (let k=1; k<values.length; k++) {
        max_sum = Math.max(max_sum, max_i + (values[k] - k));
        max_i = Math.max(max_i, values[k] + k);
    }
    return max_sum;
};