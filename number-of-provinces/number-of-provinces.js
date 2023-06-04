/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 class UnionFind {
     constructor(n) {
         this.arr = new Array(n);
         for (let i=0; i<n; i++) {
             this.arr[i] = i;
         }
         this.count = n;
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
             this.count--;
         }
     }

     size() {
         return this.count;
     }
 }


var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const edges = [];
    isConnected.forEach((connect, idx) => {
        for (let i=idx + 1; i<connect.length; i++) {
            if (connect[i] === 1) edges.push([idx, i]);
        }
    })

    const uf = new UnionFind(n);
    for (let i=0; i<edges.length; i++) {
        const [x, y] = edges[i];
        uf.union(x, y);
    }

    return uf.size();
};