/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const limit = Math.max(...candies);
    return candies.map(el => el+extraCandies >= limit ? true : false);
};