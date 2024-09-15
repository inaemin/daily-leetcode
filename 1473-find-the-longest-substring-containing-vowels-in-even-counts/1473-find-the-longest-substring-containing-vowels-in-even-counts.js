/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const map = new Map();
    map.set(0, -1);

    let bitmask = 0;
    let maxLength = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === 'a') {
            bitmask ^= (1 << 0);
        } else if (s[i] === 'e') {
            bitmask ^= (1 << 1);
        } else if (s[i] === 'i') {
            bitmask ^= (1 << 2);
        } else if (s[i] === 'o') {
            bitmask ^= (1 << 3);
        } else if (s[i] === 'u') {
            bitmask ^= (1 << 4);
        }

        if (map.has(bitmask)) {
            maxLength = Math.max(maxLength, i - map.get(bitmask));
        } else {
            map.set(bitmask, i);
        }
    }

    return maxLength;
};