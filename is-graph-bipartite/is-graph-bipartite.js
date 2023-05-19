/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const colors = Array(n).fill(0);
    for (let i=0; i<n; i++) {
        if (colors[i] === 0 && graph.length) {
            colors[i] = 1;
            const stack = [i];
            while (stack.length) {
                const curr = stack.pop();
                const neighbors = graph[curr];
                const next_color = -1*colors[curr];
                for (let neighbor of neighbors) {
                    if (colors[neighbor] === 0) {
                        stack.push(neighbor);
                        colors[neighbor] = next_color;
                    } else if (colors[neighbor]  === -1*next_color) return false;
                }
            }
        }
    }
    return true;
};