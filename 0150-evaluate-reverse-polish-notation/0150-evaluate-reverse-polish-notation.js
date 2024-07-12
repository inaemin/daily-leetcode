/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // wonderful problem to understand stack.
    const stack = [];
    for (let token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(num1 / num2 | 0);
                    break;
                default:
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};