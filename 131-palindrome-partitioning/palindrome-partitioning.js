/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const isPalindrome = (str) => {
        for (let i=0; i<str.length; i++) {
            if (str[i] !== str[str.length-1-i]) return false;
        }
        return true
    }

    const result = []
    const substring = []
    const bt = (start) => {
        if (start === s.length) {
            result.push([...substring])
            return;
        }
        for (let i=start; i<s.length; i++) {
            const str = s.slice(start, i+1);
            if (isPalindrome(str)) {
                substring.push(str)
                bt(i+1)
                substring.pop()
            }
        }
        return result;
    }

    return bt(0);
};