var SmallestInfiniteSet = function() {
    this.hash = {};
    this.smallest = 1;
    for (let i=1; i<=1000; i++) {
        this.hash[i] = 1;
    }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    while (this.smallest <= 1000) {
        if (this.hash[this.smallest] === 1) {
            this.hash[this.smallest] = 0;
            return this.smallest;
        } else {
            this.smallest += 1;
        }
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (this.hash[num] === 0) {
        this.hash[num] = 1;
        if (num < this.smallest) this.smallest = num;
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */