/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let isDeleted = false;
    let left = 0;
    let right = s.length-1;
    let i=0;
    while (i < s.length/2) {
        if (s[left+i] !== s[right-i]) {
            if (isDeleted) {
                return false;
            } else {
                if (s[left+1+i] === s[right-i]
                && s[left+i] === s[right-1-i]) {
                    console.log("Hello")
                    let j = i;
                    let l = left, r = right;
                    let isLeftPossible = true;
                    let isRightPossible = true;
                    while (j < s.length/2) {
                        if (s[l+1+j] !== s[r-j]) {
                            isLeftPossible = false;
                            break;
                        }
                        j++;
                    }
                    j = i;
                    while (j < s.length/2) {
                        if (s[l+j] !== s[r-1-j]) {
                            isRightPossible = false;
                            break;
                        }
                        j++;
                    }
                    
                    if (isLeftPossible || isRightPossible) {
                        return true;
                    } else {
                        return false;
                    }
                } else if (s[left+1+i] === s[right-i]) {
                    left++;
                } else if (s[left+i] === s[right-1-i]) {
                    right--;
                } else {
                    return false;
                }
                isDeleted = true;
            }
        }
        i++;
    }

    return true;
};