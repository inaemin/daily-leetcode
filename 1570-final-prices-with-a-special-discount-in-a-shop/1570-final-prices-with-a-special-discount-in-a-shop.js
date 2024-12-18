/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    for (let i=0; i<prices.length; i++) {
        const org = prices[i];
        let discount = 0;
        for (let j=i+1; j<prices.length; j++) {
            if (prices[j] <= org) {
                discount = prices[j];
                break;
            }
        }
        prices[i] = org - discount;
    }
    return prices;
};