/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const edges = [...Array(n)].map(el => new Array());
    manager.forEach((el, idx) => {
        if (el !== -1) edges[el].push(idx);
    })
    
    let answer = 0;
    const dfs = (arr, sum=informTime[headID]) => {
        if (!arr.length) {
            answer = Math.max(answer, sum);
            return;
        }
        for (let i=0; i<arr.length; i++) {
            dfs(edges[arr[i]], sum + informTime[arr[i]]);
        }
    }
    dfs(edges[headID]);
    return answer;
};