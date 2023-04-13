/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = []
    let i=0;
    for (let p of pushed) {
        stack.push(p)
        while (stack.length && stack[stack.length-1] === popped[i]) {
            stack.pop()
            i += 1;
        }
    }
    return popped.length === i;
};