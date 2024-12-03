/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
    const node = new Map()
    const edges = new Map()
    for (let [start, end] of pairs) {
        if (!node.has(start))
            node.set(start, [])
        node.get(start).push(end)
        
        edges.set(start, (edges.get(start) || 0) + 1) // outbound
        edges.set(end, (edges.get(end) || 0) - 1) // inbound
    }

    let start = pairs[0][0];
    for (let [node, diff] of edges) {
        if (diff === 1) {
            start = node;
            break;
        }
    }

    const path = []
    const dfs = (start) => {
        if (!node.has(start) || !node.get(start).length)
            return;
        
        while (node.get(start).length) {
            const next = node.get(start).pop()
            dfs(next)
            path.push([start, next])
        }
    }
    dfs(start)

    return path.reverse();
};