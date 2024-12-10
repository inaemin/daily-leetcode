/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const map = new Map();
    for (let i=0; i<s.length; i++) {
        let str = s[i];
        if (!map.has(str))
            map.set(str, 0);
        map.set(str, map.get(str) + 1);
        for (let j=i+1; j<s.length; j++) {
            if (str.at(-1) !== s[j]) break;
            str += s[j];
            if (!map.has(str))
                map.set(str, 0);
            map.set(str, map.get(str) + 1);
        }
    }

    let max = -1;
    for (let [key, value] of map) {
        if (value < 3) continue;
        if (key.length <= max) continue;
        max = key.length;
    }

    return max;
};