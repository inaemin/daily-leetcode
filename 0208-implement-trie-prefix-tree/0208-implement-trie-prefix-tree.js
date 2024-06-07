
var Trie = function() {
    this.trie = new Map()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let pointer = this.trie;
    for (let i=0; i<word.length; i++) {
        if (!pointer.has(word[i])) {
            pointer.set(word[i], new Map())
        }
        pointer = pointer.get(word[i])
    }
    pointer.set('isEnd', true);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let pointer = this.trie;
    for (let i=0; i<word.length; i++) {
        if (pointer.has(word[i])) {
            pointer = pointer.get(word[i])
        } else return false;
    }
    return pointer.get('isEnd') ? true : false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let pointer = this.trie;
    for (let i=0; i<prefix.length; i++) {
        if (pointer.has(prefix[i])) {
            pointer = pointer.get(prefix[i])
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */