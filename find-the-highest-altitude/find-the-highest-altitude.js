/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const altitude = [0];
    let max = 0;
    for (let g of gain) {
        const next = g + altitude[altitude.length-1];
        altitude.push(next);
        if (next > max) max = next;
    }
    return max;
};