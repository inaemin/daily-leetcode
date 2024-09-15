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
        switch (s[i]) {
            case 'a':
                bitmask ^= (1 << 0);
                break;
            case 'e':
                bitmask ^= (1 << 1);
                break;
            case 'i':
                bitmask ^= (1 << 2);
                break;
            case 'o':
                bitmask ^= (1 << 3);
                break;
            case 'u':
                bitmask ^= (1 << 4);
                break;
            default:
                break;
        }

        if (map.has(bitmask)) {
            maxLength = Math.max(maxLength, i - map.get(bitmask));
        } else {
            map.set(bitmask, i);
        }
    }

    return maxLength;
};