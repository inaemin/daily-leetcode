/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === "]") {
            let encoded_string = ""
            while (stack.length) {
                const popped = stack.pop();
                if (popped === "[") break;
                encoded_string = popped + encoded_string;
            }
            let k = ""
            while (stack.length) {
                if (isNaN(+stack[stack.length-1])) break; // string이라면
                k = stack.pop() + k;
            }
            stack.push(encoded_string.repeat(+k));
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join("")
};