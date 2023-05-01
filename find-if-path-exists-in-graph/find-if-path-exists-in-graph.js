/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

 class UnionFind {
     constructor(n) {
         this.arr = new Array(n);
         for (let i=0; i<n; i++) {
             this.arr[i] = i;
         }
     }

     find(x) {
         if (this.arr[x] !== x) {
             this.arr[x] = this.find(this.arr[x])
         }
         return this.arr[x];
     }

     union (x, y) {
         let px = this.find(x);
         let py = this.find(y);
         if (px !== py) {
             if (px < py) {
                 this.arr[py] = px;
             } else {
                 this.arr[px] = py;
             }
         }``
     }
 }

var validPath = function(n, edges, source, destination) {
    const uf = new UnionFind(n);
    for (let i=0; i<edges.length; i++) {
        const [x, y] = edges[i];
        uf.union(x, y);
    }

    return uf.find(source) === uf.find(destination)
};