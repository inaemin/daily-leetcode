/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let answer = 0;
    // B-A; B대신 A로 보냄으로써 회사가 얻게 되는 이익 순 나열.
    costs.sort(([a, b], [c, d]) => (d-c) - (b-a));
    for (let i=0; i<costs.length/2; i++) {
        answer += costs[i][0];
    }
    for (let i=costs.length/2; i<costs.length; i++) {
        answer += costs[i][1];
    }
    
    return answer;
};