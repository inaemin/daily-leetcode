/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // 원래 색과 바꾸려는 색이 같다면 그대로 리턴.
    if (image[sr][sc] === color) return image;
    const dfs = (r,c,original_color) => {
        if (r<0 || c<0 || r>=image.length || c>=image[0].length || image[r][c] !== original_color) return;
        image[r][c] = color;
        dfs(r+1, c, original_color);
        dfs(r-1, c, original_color);
        dfs(r, c+1, original_color);
        dfs(r, c-1, original_color);
    }

    let original_color = image[sr][sc];
    dfs(sr,sc,original_color)
    return image;
};