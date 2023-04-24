/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => b - a);
    while (stones.length > 1) {
        let diff = stones[0] - stones[1]
        stones.splice(0, 2);
        if (diff > 0) {
            let addedIdx = stones.findIndex(el => el <= diff);
            addedIdx === -1 ? stones.push(diff) : stones.splice(addedIdx, 0, diff);
        }
    } 

    return stones[0] ?? 0;
};