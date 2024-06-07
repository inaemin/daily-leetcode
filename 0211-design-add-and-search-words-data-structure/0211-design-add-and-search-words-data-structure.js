
var WordDictionary = function() {
    this.trie = new Map()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word) {
    const dfs = (node, word) => {
        for (let i=0; i<word.length; i++) {
            if (word[i] === ".") {
                for (let [key, child] of node) {
                    if (key !== "isEnd" && dfs(child, word.slice(i+1))) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node.has(word[i])) {
                    return false;
                }
                node = node.get(word[i])
            }
        }
        return node.has('isEnd')
    }
    return dfs(this.trie, word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */