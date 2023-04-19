/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set([0])
    const queue = [...rooms[0]];
    while (queue.length) {
        visited.add(queue[0])
        rooms[queue[0]].forEach((el) => {
            if (!visited.has(el)) queue.push(el);
        })
        queue.shift()
    }
    return visited.size === rooms.length;
};