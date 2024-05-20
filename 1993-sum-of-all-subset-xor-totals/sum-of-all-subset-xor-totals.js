/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    if (!nums.length) return 0

    let sum = 0;
    const subsets = (index, subsum=0) => {
        if (index === nums.length) {
            sum += subsum;
            return;
        }
        subsets(index+1, subsum ^ nums[index])
        subsets(index+1, subsum)
    }
    subsets(0, 0)
    return sum;
};