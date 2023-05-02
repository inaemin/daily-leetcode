/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length
    const color = Array(n).fill(0);
    for (let i=0; i<graph.length; i++) {
        if (color[i] === 0) {
            const stack = [];
            stack.push(i);
            color[i] = 1;
            while (stack.length) {
                let curr = stack.pop();
                let connects = graph[curr];
                let next_color = color[curr] * -1;
                for (let connect of connects) {
                    if (color[connect] === 0) {
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