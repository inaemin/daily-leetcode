/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length
    const color = Array(n).fill(0);
    const visited = new Set();
    for (let i=0; i<graph.length; i++) {
        if (!visited.has(i)) {
            const stack = [];
            stack.push(i);
            visited.add(i);
            color[i] = 1;
            while (stack.length) {
                let curr = stack.pop();
                let connects = graph[curr];
                let next_color = color[curr] * -1;
                for (let connect of connects) {
                    if (!visited.has(connect)) {
                        visited.add(connect);
                        stack.push(connect);
                        color[connect] = next_color
                    } else {
                        if (color[connect] !== 0 && color[connect] !== next_color) return false;
                    }
                }
            }
        }
    }

    return true;
};