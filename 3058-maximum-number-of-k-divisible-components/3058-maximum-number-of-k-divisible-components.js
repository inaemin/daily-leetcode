/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    let count = 0;
    const adjArr = Array.from({length: n}, () => new Array());
    for (let [n1, n2] of edges) {
        adjArr[n1].push(n2);
        adjArr[n2].push(n1);
    }

    const visited = new Set();
    
    const dfs = (node) => {
        if (visited.has(node)) return 0;

        visited.add(node);
        
        let sub_sum = values[node];
        for (let next of adjArr[node]) {
            if (!visited.has(next)) {
                sub_sum += dfs(next);
            }
        }

        if (sub_sum % k === 0) {
            count++;
            return 0;
        } else {
            return sub_sum;
        }
    }

    dfs(0);
    return count;
};