/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i=0; i<nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        }
        let key = target-nums[i];
        map.set(key, i);
    }
};