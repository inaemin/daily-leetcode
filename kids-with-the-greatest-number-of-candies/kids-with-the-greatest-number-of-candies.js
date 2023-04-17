/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const limit = Math.max(...candies);
    candies.forEach((el, idx, org) => {
        if (el + extraCandies >= limit) org[idx] = true;
        else org[idx] = false;
    })
    return candies;
};