
var ProductOfNumbers = function() {
    this.accum = 1;
    this.index = 0;
    this.lastZeroIndex = -1;
    this.indexAccumMap = new Map();
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.lastZeroIndex = this.index;
        this.accum = 1;
    } else {
        this.accum *= num;
    }
    this.indexAccumMap.set(this.index, this.accum);
    this.index++;
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (this.lastZeroIndex !== -1 && (k >= this.index - this.lastZeroIndex)) return 0;
    if (this.index === k) return this.indexAccumMap.get(this.index - 1);
    const product = this.indexAccumMap.get(this.index - 1) / this.indexAccumMap.get(this.index - k - 1);
    return product;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */