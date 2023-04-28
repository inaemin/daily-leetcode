/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    const countStr = (s) => {
        const alphabet_table = {};
        s.split("").forEach(el => {
            if (alphabet_table[el] === undefined) alphabet_table[el] = 1;
            else alphabet_table[el] += 1;
        })
        return Object.keys(alphabet_table).sort().reduce((r, e) => r + `${e}${alphabet_table[e]}`, "");
    }

    strs.forEach(el => {
        if (obj[countStr(el)] === undefined) obj[countStr(el)] = [el];
        else obj[countStr(el)].push(el);
    })

    return Object.values(obj);
};