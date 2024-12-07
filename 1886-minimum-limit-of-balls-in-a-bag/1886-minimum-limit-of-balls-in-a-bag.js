/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {

    const canMake = (size) => {
        let operations = 0;
        for (let num of nums) {
            operations += Math.ceil(num / size) - 1;
        }
        return operations <= maxOperations;
    }

    let left = 1;
    let right = Math.max(...nums);
    while (left <= right) {
        let middle = (left+right)/2|0;
        if (canMake(middle)) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    
    return left;
};