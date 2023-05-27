/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const max = str1.length >= str2.length ? str1 : str2;
    const min = str1.length >= str2.length ? str2 : str1;
    const gcd = (max, min) => {
        if (max % min === 0) return min;
        return gcd(min, max%min);
    }
    const gcdOfStrs = min.slice(0, gcd(max.length, min.length));
    const isDivided = (str) => {
        for (let i=0; i<str.length/gcdOfStrs.length; i++) {
            for (let j=0; j<gcdOfStrs.length; j++) {
                if (str[i*gcdOfStrs.length + j] !== gcdOfStrs[j]) return false;
            }
        }
        return true;
    }

    if (isDivided(str1) && isDivided(str2)) return gcdOfStrs;
    return ""
};