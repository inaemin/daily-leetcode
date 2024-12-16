/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
    const mpq = new MinPriorityQueue({
        compare: (e1, e2) => {
            if (e1.value !== e2.value) return e1.value - e2.value;
            return e1.index - e2.index;
        }
    })

    for (let i = 0; i < nums.length; i++) {
        mpq.enqueue({ index: i, value: nums[i] });
    }

    for (let i = 0; i < k; i++) {
        const { index, value } = mpq.dequeue();
        mpq.enqueue({ index, value: value * multiplier });
    }

    while (!mpq.isEmpty()) {
        const { index, value } = mpq.dequeue();
        nums[index] = value;
    }
    return nums;
};