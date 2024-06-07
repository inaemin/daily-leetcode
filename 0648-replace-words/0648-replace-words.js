function Trie() {
    this.trie = new Map();
}

Trie.prototype.insert = function(word) {
    let pointer = this.trie;
    for (let i=0; i<word.length; i++) {
        if (!pointer.has(word[i])) {
            pointer.set(word[i], new Map())
        }
        pointer = pointer.get(word[i])
    }
    pointer.set('isEnd', true);
}

Trie.prototype.startsWith = function(prefix) {
    let pointer = this.trie;
    let word = ''
    for (let i=0; i<prefix.length; i++) {
        if (pointer.has(prefix[i])) {
            word += prefix[i]
            pointer = pointer.get(prefix[i])
            if (pointer.get('isEnd')) return word;
        } else {
            return prefix;
        }
    }
    return word;
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const trie = new Trie();
    for (let word of dictionary) {
        trie.insert(word);
    }
    const words = sentence.split(" ");
    for (let i=0; i<words.length; i++) {
        words[i] = trie.startsWith(words[i])
        console.log(words[i])
    }
    return words.join(" ")
};