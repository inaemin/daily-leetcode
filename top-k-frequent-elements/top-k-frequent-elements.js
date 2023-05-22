/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = {};
    const count = {};
    nums.forEach((num) => {
        if (obj[num]) {
            obj[num] += 1;
            if (count[obj[num]]) count[obj[num]].push(num);
            else count[obj[num]] = [num];
        }
        else {
            obj[num] = 1;
            if (count[obj[num]]) count[obj[num]].push(num);
            else count[obj[num]] = [num];
        }
    })
    
    const count_keys = Object.keys(count).sort((a, b) => b - a);
    for (let i=0; i<count_keys.length; i++) {
        if (count[count_keys[i]].length >= k) return count[count_keys[i]].slice(0, k);
    }
};