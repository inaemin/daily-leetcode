/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    const isSimilar = (s1, s2) => {
      let cnt = 0;
      for (let i=0; i<s1.length; i++) {
        if (s1[i] !== s2[i]) cnt += 1;
      }
      return cnt === 0 || cnt === 2 ? true : false;
    }
    const vertices = [...Array(strs.length)].map(el => new Array());
    const edges = [];
    for (let i=0; i<strs.length; i++) {
      for (let j=i; j<strs.length; j++) {
        if (isSimilar(strs[i], strs[j])) edges.push([i, j])
      }
    }
    // graph 만들기
    for (let edge of edges) {
      const [x, y] = edge;
      vertices[x].push(y);
      vertices[y].push(x);
    }
    
    let group = 0;
    const visited = new Set();
    const stack = [];
    const dfs = (i) => {
      if (visited.has(i)) return;
      visited.add(i);
      stack.push(...vertices[i]);
      while (stack.length) {
        let next = stack.pop()
        dfs(next)
      }
    }
    for (let i=0; i<vertices.length; i++) {
      if (!visited.has(i)) {
        dfs(i);
        group += 1;
      }
    }
    return group;
};