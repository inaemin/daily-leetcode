/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    const edges = [];
    for (let i=0; i<bombs.length; i++) {
        edges[i] = bombs.reduce((res, el, idx) => {
            if (idx !== i) {
                const [a, b, c] = bombs[i];
                const [d, e, f] = el;
                if ((a-d)**2 + (b-e)**2 <= c**2) {
                    res.push(idx);
                }
            } return res;
        }, []);
    }

    const dfs = (arr, visited) => {
        if (!arr.length || visited.size === bombs.length) return;
        for (let i=0; i<arr.length; i++) {
            if (visited.has(arr[i])) continue;
            visited.add(arr[i])
            dfs(edges[arr[i]], visited);
        }
    }

    let answer = 0;
    for (let i=0; i<edges.length; i++) {
        const visited = new Set();
        visited.add(i);
        dfs(edges[i], visited);
        answer = Math.max(answer, visited.size);
    }

    return answer;
};