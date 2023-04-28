/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = new Map();
    const countStr = (s) => {
        const alphabet_table = new Map();
        'abcdefghijklmnopqrstuvwxyz'.split("").forEach(el => alphabet_table.set(el, 1));
        s.split("").forEach(el => alphabet_table.set(el, alphabet_table.get(el) + 1));

        let answer = "";
        for (let e of alphabet_table.keys()) {
            if (alphabet_table.get(e) !== 0) answer += `${e}${alphabet_table.get(e)}`
        }
        return answer;
    }

    strs.forEach(el => {
        if (obj.get(countStr(el)) === undefined) obj.set(countStr(el), [el])
        else obj.set(countStr(el), [...obj.get(countStr(el)), el])
    })

    return Array.from(obj.values());
};