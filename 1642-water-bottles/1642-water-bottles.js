/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drink = numBottles;
    while (numBottles >= numExchange) {
        const q = Math.floor(numBottles / numExchange);
        const r = numBottles % numExchange;
        drink += q;
        numBottles = q + r;
    }

    return drink;
};