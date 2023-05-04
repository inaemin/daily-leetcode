/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length
    let total_tank = 0;
    let curr_tank = 0;
    let startIdx = 0;
    for (let i=0; i<n; i++) {
        total_tank += gas[i] - cost[i];
        curr_tank += gas[i] - cost[i];
        if (curr_tank < 0 ) {
            startIdx = i + 1;
            curr_tank = 0;
        }
    }

    return total_tank < 0 ? -1 : startIdx;
};