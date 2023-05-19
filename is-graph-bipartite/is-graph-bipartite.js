/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const colors = Array(n).fill(0);
    const dfs = (i, color) => {
        if (colors[i] === color*-1) return false;
        if (colors[i] === color) return true;
        const stack = [...graph[i]];
        colors[i] = color;
        while (stack.length) {
            if (!dfs(stack.pop(), color*-1)) return false;
        }
        return true;
    }

    for (let i=0; i<n; i++) {
        if (colors[i] === 0 && !dfs(i, 1)) return false;
    }
    return true;
};