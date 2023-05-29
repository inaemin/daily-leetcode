/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.arr = Array(n+1);
    this.arr[0] = null;
    this.pointer = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey] = value;
    const result = [];
    while (this.arr[this.pointer]) {
        result.push(this.arr[this.pointer])
        this.pointer++;
    }
    return result;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */