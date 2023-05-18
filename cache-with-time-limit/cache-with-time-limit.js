var TimeLimitedCache = function() {
    this.map = new Map();
    this.timer;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if (this.map.has(key)) {
        this.map.set(key, value);
        clearTimeout(this.timer);
        const timer = setTimeout(() => this.map.delete(key), duration);
        this.timer = timer;
        return true;
    }
    this.map.set(key, value);
    const timer = setTimeout(() => this.map.delete(key), duration);
    this.timer = timer;
    return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.map.get(key) || -1;
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