/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const words_hash = words.map(el => {
        const obj = {};
        for (let c of el) {
            if (!obj[c]) {
                obj[c] = 1;
            } else {
                obj[c]++;
            }
        }
        return obj;
    })
    const result = []
    const keys = Object.keys(words_hash[0]);
    for (let i=0; i<keys.length; i++) {
        let cnt = words_hash[0][keys[i]];
        for (let j=1; j<words_hash.length; j++) {
            if (!words_hash[j][keys[i]]) {
                cnt = 0;
                break;
            } else {
                cnt = Math.min(words_hash[j][keys[i]], cnt);
            }
        }
        if (cnt) {
            for (let k=0; k<cnt; k++) {
                result.push(keys[i])
            }
        }
    }
    return result;
};