/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const bfs = (arr) => {
        while (arr.length) {
            const next = arr.shift();
            const connect = isConnected[next];
            for (let j=0; j<connect.length; j++) {
                if (!visited.has(j) && connect[j] === 1) {
                    visited.add(j);
                    arr.push(j);
                }
            }
        }        
    }

    let answer = 0;
    const visited = new Set();
    for (let i=0; i<isConnected.length; i++) {
        if (!visited.has(i)) {
            const queue = [i];
            visited.add(i);
            answer += 1;
            bfs(queue)
        }
    }

    return answer;
};