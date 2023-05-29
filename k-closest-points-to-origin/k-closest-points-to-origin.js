/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a, b) => {
        const alen = a[0]**2 + a[1]**2;
        const blen = b[0]**2 + b[1]**2;
        return alen - blen;
    })
    return points.slice(0, k)
};