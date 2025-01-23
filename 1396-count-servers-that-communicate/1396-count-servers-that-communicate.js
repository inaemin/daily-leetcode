/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rows = Array.from({length: m}, () => new Array());
    const cols = Array.from({length: n}, () => new Array());
    let total_server = 0;
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === 1) {
                rows[i].push(j);
                cols[j].push(i);
                total_server++;
            }
        }
    }

    let solo_server = 0; // 주변에 서버가 하나도 없는 서버 개수
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === 1 && rows[i].length === 1 && cols[j].length === 1) {
                solo_server++;
            }
        }
    }

    return total_server - solo_server;
};