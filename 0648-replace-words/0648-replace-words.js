/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    const words = sentence.split(" ").map((word) => {
        const root = dictionary.find((dict) => word.startsWith(dict))
        return root ? root : word;
    });

    return words.join(" ");
};