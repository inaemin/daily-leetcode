/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const dp = [...Array(n)].map(el => new Array(n).fill(0));
    const isEnded = (i, j) => {
        console.log(i, j)
        if (j+1<n && dp[i][j+1] === 0) return [i, j+1, "right"];
        else if (i+1<n && dp[i+1][j] === 0) return [i+1, j, "down"]
        else if (j-1>=0 && dp[i][j-1] === 0) return [i, j-1, "left"]
        else if (i-1>=0 && dp[i-1][j] === 0) return [i-1, j, "up"]
        return "end"
    }
    const dfs = (i, j, direction, cnt, pre_i, pre_j) => {
        if (i<0 || j<0 || i>=n || j>=n || dp[i][j] !== 0) return [cnt, pre_i, pre_j];
        dp[i][j] = cnt
        if (direction === "right") return dfs(i, j+1, direction, cnt+1, i, j);
        if (direction === "down") return dfs(i+1, j, direction, cnt+1, i, j);
        if (direction === "left") return dfs(i, j-1, direction, cnt+1, i, j);
        if (direction === "up") return dfs(i-1, j, direction, cnt+1, i, j);
    }

    dp[0][0] = 1;
    let cnt = 2;
    let i=0, j=0;
    while (cnt <= n**2) {
        const [next_i, next_j, direction] = isEnded(i, j);
        const [next_cnt, x, y] = dfs(next_i, next_j, direction, cnt);
        i = x;
        j = y;
        cnt = next_cnt;
    }

    return dp
};