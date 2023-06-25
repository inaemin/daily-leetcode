/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let answer = 0;
    const set = new Set();
    for (let word of words) {
        set.add(word);
    }
    for (let i=0; i<words.length; i++) {
        const reversed_text = words[i].split("").reverse().join("");
        if (words[i] === reversed_text) continue;
        if (set.has(reversed_text)) {
            answer++;
            set.delete(words[i]);
            set.delete(reversed_text);
        }
    }
    return answer;
};