/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const mpq = new MinPriorityQueue({
        compare: (e1, e2) => {
            if (e1.value !== e2.value) return e1.value - e2.value;
            return e1.index - e2.index;
        }
    });
    for (let i=0; i<nums.length; i++) {
        mpq.enqueue({index: i, value: nums[i]});
    }

    const visited = new Set();
    let score = 0;
    while (!mpq.isEmpty()) {
        const {index, value} = mpq.dequeue();
        if (!visited.has(index)) {
            visited.add(index);
            visited.add(index-1);
            visited.add(index+1);
            score += value;
        }        
    }

    return score;
};