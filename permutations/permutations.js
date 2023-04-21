/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // recursion1
    const result = [];
    const bt = (subset, idx, rest) => {
        if (rest.length === 1) {
            result.push([...subset, rest[0]])
            return;
        }

        rest.forEach((fixed, i, o) => {
            subset.push(fixed);
            bt(subset, idx+1, o.filter(el => el !== fixed));
            subset.pop();
        })
    }

    bt([], 0, nums) //current, nextIdx
    return result;


    // recursion2
    // const result = [];
    // if (nums.length === 1) return nums.map(el => [el]);

    // nums.forEach((fixed, idx, org) => {
    //     const rest = org.filter(el => el !== fixed);
    //     const permutations = permute(rest);
    //     const attach = permutations.map(el => [fixed, ...el]);
    //     result.push(...attach);
    // })

    // return result;

    // iteration
};