/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negative_cnt = 0;
    for (let num of nums) {
        if (num < 0) negative_cnt += 1;
        if (num === 0) return 0;
    }

    return negative_cnt % 2 === 0 ? 1 : -1;
};