/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function (k, n) {
    const isPalindrome = (str) => {
        return str === str.split("").reverse().join("");
    }

    let sum = 0;
    let count = 0;
    const gen = generatePalindrome();

    for (let palindrome of gen) {
        if (isPalindrome(palindrome.toString(k))) {
            sum += palindrome;
            count++;
        }
        if (count === n) break;
    }

    return sum;
};

// 10진수 팰린드롬 생성
function* generatePalindrome() {
    // 1자리
    for (let i = 1; i < 10; i++) {
        yield i;
    }

    // 2자리 이상
    for (let length = 2; ; length++) {
        const isOdd = length % 2 === 1;
        const halfLength = Math.ceil(length / 2);
        const start = Math.pow(10, halfLength - 1);
        const end = Math.pow(10, halfLength) - 1;

        for (let half = start; half <= end; half++) {
            const leftStr = half.toString()
            const rightStr = leftStr.slice(0, isOdd ? -1 : leftStr.length).split("").reverse().join("");
            const palindrome = parseInt(leftStr + rightStr);
            yield palindrome;
        }
    }
}