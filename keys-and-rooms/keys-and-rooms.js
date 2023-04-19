/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // BFS using queue
    // const visited = new Set([0])
    // const queue = rooms[0];
    // while (queue.length) {
    //     visited.add(queue[0])
    //     rooms[queue[0]].forEach((el) => {
    //         if (!visited.has(el)) queue.push(el);
    //     })
    //     queue.shift()
    // }
    // return visited.size === rooms.length;

    // DFS using stack
    // const visited = new Set([0]);
    // const stack = rooms[0];
    // while (stack.length) {
    //     const key = stack[stack.length-1]
    //     visited.add(key)
    //     stack.pop();
    //     rooms[key].forEach((el) => {
    //         if (!visited.has(el)) stack.push(el)
    //     })
    // }
    // return visited.size === rooms.length;

    // DFS using recursive function
    const visited = new Set();
    const dfs = (n) => {
        if (visited.has(n)) return;
        visited.add(n)
        rooms[n].forEach(el => dfs(el))
    }
    dfs(0)
    return visited.size === rooms.length;
};