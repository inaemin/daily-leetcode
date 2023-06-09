/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    const isSimilar = (s1, s2) => {
      let cnt = 0;
      for (let i=0; i<s1.length; i++) {
        if (s1[i] !== s2[i]) cnt += 1;
        if (cnt > 2) return false;
      }
      return true;
    }

    let group = 0;
    const visited = new Set();
    const dfs = (str) => {
      if (visited.has(str)) return;
      visited.add(str);
      for (let next of strs) {
        if (!visited.has(next) && isSimilar(str, next)) dfs(next);
      }
    }
    
    for (let str of strs) {
      if (!visited.has(str)) {
        dfs(str)
        group += 1;
      }
    }
    return group;
};