var SmallestInfiniteSet = function() {
    this.set = [...Array(1000)].map((el, idx) => idx + 1);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    return this.set.shift()
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    for (let i=0; i<this.set.length; i++) {
        if (this.set[i] === num) return;
        else if (this.set[i] > num) {
            this.set.splice(i, 0, num);
            return;
        }
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */