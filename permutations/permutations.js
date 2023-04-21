/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // recursion1
    const result = [];

    const backtrack = (current, rest) => {
        if (!rest.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < rest.length; i++) {
            [rest[i], rest[0]] = [rest[0], rest[i]];
            current.push(rest[0]);
            backtrack(current, rest.slice(1));
            current.pop();
            [rest[i], rest[0]] = [rest[0], rest[i]];
        }
    };

    backtrack([], nums);
    return result;

    // recursion2


    // iteration
};