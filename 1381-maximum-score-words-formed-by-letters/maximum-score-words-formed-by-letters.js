/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    const letters_count = {};
    const letters_score = {};
    const abc = "abcdefghijklmnopqrstuvwxyz";
    for (let letter of letters) {
        if (!letters_count[letter]) {
            letters_count[letter] = 1;
        } else {
            letters_count[letter]++;
        }
    }

    for (let i=0; i<abc.length; i++) {
        letters_score[abc[i]] = score[i];
    }

    let max = 0;
    const subsets = [[]];
    for (let i=0; i<words.length; i++) {
        const currentLength = subsets.length;
        for (let j=0; j<currentLength; j++) {
            const subset = [...subsets[j], words[i]];
            const count = {}
            for (let str of subset) {
                for (let s of str) {
                    if (!count[s]) {
                        count[s] = 1;
                    } else {
                        count[s]++;
                    }
                }
            }
            const count_key = Object.keys(count)
            let isPossible = true
            for (let i=0; i<count_key.length; i++) {
                if (count[count_key[i]] > (letters_count?.[count_key[i]] || 0)) {
                    isPossible = false;
                    break;
                }
            }
            if (isPossible) {
                let score = 0;
                for (let str of subset) {
                    for (let s of str) {
                        score += letters_score[s];
                    }
                }
                max = Math.max(max, score);
                subsets.push(subset)
            }
        }
    }
    return max;
};