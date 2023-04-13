/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = []
    let i=0;

    pushed.forEach((el) => {
        stack.push(el)
        while (stack.length && stack[stack.length-1] === popped[i]) {
            stack.pop()
            i += 1;
        }
    })

    return popped.length === i;
};