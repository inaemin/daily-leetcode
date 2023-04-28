/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = new Map();
    strs.forEach((el, idx, org) => {
        let sorted = el.split("").sort().join("");
        if (obj.has(sorted)) obj.set(sorted, [...obj.get(sorted), el]);
        else obj.set(sorted, [el]);
    })

    return Array.from(obj.values())
};