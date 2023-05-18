var TimeLimitedCache = function() {
    this.map = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.map.has(key)) {
        clearTimeout(this.map.get(key).timer)
        this.map.set(key, {value, timer: setTimeout(() => this.map.delete(key), duration)});
        return true;
    }
    this.map.set(key, {value, timer: setTimeout(() => this.map.delete(key), duration)});
    return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.map.has(key) ? this.map.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.map.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */