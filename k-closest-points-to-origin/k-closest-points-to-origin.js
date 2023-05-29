/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const obj = {};
    for (let point of points) {
        const [x, y] = point;
        const len = x**2 + y**2;
        if (obj[len]) obj[len].push([x, y]);
        else obj[len] = [[x, y]];
    }
    
    const result = [];
    const keys = Object.keys(obj).sort((a, b) => Number(a) - Number(b));
    let cnt = 0;
    for (let i=0; i<keys.length; i++) {
        const values = obj[keys[i]];
        for (let value of values) {
            result.push(value);
            cnt++;
            if (cnt === k) return result;
        }
    }
};