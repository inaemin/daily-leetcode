/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const subset_freq = new Array(26).fill(0);
    for (let w2 of words2) {
        const char_cnt = new Array(26).fill(0);
        for (let i=0; i<w2.length; i++) {
            char_cnt[w2[i].charCodeAt() - 'a'.charCodeAt()]++;
        }
        for (let i=0; i<char_cnt.length; i++) {
            subset_freq[i] = Math.max(subset_freq[i], char_cnt[i]);
        }
    }

    const answer = []
    for (let w1 of words1) {
        const char_freq = new Array(26).fill(0);
        for (let i=0; i<w1.length; i++) {
            char_freq[w1[i].charCodeAt() - 'a'.charCodeAt()]++;
        }

        let isUniversal = true;
        for (let i=0; i<char_freq.length; i++) {
            if (char_freq[i] < subset_freq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) {
            answer.push(w1);
        }
    }
    return answer;
};