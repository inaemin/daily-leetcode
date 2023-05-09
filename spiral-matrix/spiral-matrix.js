/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const isEnded = (i, j) => {
        if (j+1<n && typeof matrix[i][j+1] === "number") return [i, j+1, "right"]
        else if (i+1<m && typeof matrix[i+1][j] === "number") return [i+1, j, "down"]
        else if (j-1>=0 && typeof matrix[i][j-1] === "number") return [i, j-1, "left"]
        else if (i-1>=0 && typeof matrix[i-1][j] === "number") return [i-1, j, "up"]
        return "end"
    }
    const dfs = (i, j, direction, pre_i, pre_j) => {
        if (i<0 || j<0 || i>=m || j>=n || matrix[i][j] === false) return [pre_i, pre_j];
        result.push(matrix[i][j]);
        matrix[i][j] = false;
        if (direction === "right") return dfs(i, j+1, direction, i, j);
        if (direction === "down") return dfs(i+1, j, direction, i, j);
        if (direction === "left") return dfs(i, j-1, direction, i, j);
        if (direction === "up") return dfs(i-1, j, direction, i, j);
        if (direction === "end") return;
    }

    const result = [matrix[0][0]];
    matrix[0][0] = false;
    let i = 0, j = 0;
    while (isEnded(i, j) !== "end") {
        const [x, y] = dfs(...isEnded(i, j));
        i = x;
        j = y;
    }

    return result;
};