/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    const countStr = (s) => {
        const alphabet_table = {};
        'abcdefghijklmnopqrstuvwxyz'.split("").forEach(el => alphabet_table[el] = 0);
        s.split("").forEach(el => alphabet_table[el] += 1)
        let answer = Object.keys(alphabet_table).reduce((r, e) => {
            if (alphabet_table[e] !== 0) r += `${e}${alphabet_table[e]}`;
            return r;
        }, "")
        return answer;
    }

    strs.forEach(el => {
        if (obj[countStr(el)] === undefined) obj[countStr(el)] = [el];
        else obj[countStr(el)].push(el);
    })

    return Object.values(obj);
};