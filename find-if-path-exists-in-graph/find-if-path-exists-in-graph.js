/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const vertices = [];
    edges.forEach((edge) => {
        const [x, y] = edge;
        if (vertices[x] === undefined) vertices[x] = [y]
        else vertices[x].push(y);
        if (vertices[y] === undefined) vertices[y] = [x];
        else vertices[y].push(x);
    })

    if (source === destination) return true;
    const visited = new Set();
    const stack = [...vertices[source]];
    while (stack.length) {
        const next = stack.pop();
        if (next === destination) return true;
        visited.add(next);
        stack.push(...vertices[next].filter(el => !visited.has(el)))        
    }
    return false;        
};