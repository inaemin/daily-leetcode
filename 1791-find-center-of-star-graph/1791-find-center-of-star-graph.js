/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const edge1 = edges[0]
    const edge2 = edges[1]
    return edge2.includes(edge1[0]) ? edge1[0] : edge1[1]
};