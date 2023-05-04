/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length
    for (let i=0; i<n; i++) {
        let tank = 0;
        if (gas[i] - cost[i] < 0) continue;
        else {
            for (let j=i; j<i+n; j++) {
                tank += gas[j%n] - cost[j%n];
                if (tank < 0) {
                    i = j
                    break;
                }
            }
            if (tank >= 0) return i; 
        }
    }

    return -1;
};