const isPalindrome = (start, end, str) => {
    for (let i=0; i<(end-start)/2; i++) {
        if (str[start+i] !== str[end-i]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;
    for (let i=0; i<s.length/2; i++) {
        if (s[left+i] !== s[right-i]) {
            if (s[left+1+i] === s[right-i] 
            && s[left+i] === s[right-1-i]) {
                return isPalindrome(left+1+i, right-i, s)
                || isPalindrome(left+i, right-1-i, s);
            } else if (s[left+1+i] === s[right-i]) {
                return isPalindrome(left+1+i, right-i, s);
            } else if (s[left+i] === s[right-1-i]) {
                return isPalindrome(left+i, right-1-i, s);
            } else {
                return false;
            }
        }
    }
    return true;
};