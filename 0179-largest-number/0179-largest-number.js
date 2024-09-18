/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        const n1 = Number(String(a) + String(b));
        const n2 = Number(String(b) + String(a));
        return n2 - n1;
    })

    if (nums[0] === 0)
        return "0";
    return nums.join('');
};