/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    const answer = []
    const dial = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    const bt = (letter, idx) => {
        let chars = dial[digits[idx]];
        if (chars === undefined) {
            answer.push(letter);
            return;
        }
        chars.forEach((el) => {
            bt(letter + el, idx+1)
        })
    }

    if (digits.length < 1) return answer;
    bt("", 0)
          
    return answer;
};