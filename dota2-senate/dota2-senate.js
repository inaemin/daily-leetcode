/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const stack = [];
    const senate_arr = senate.split("");
    while (senate_arr.length) {
        if (!stack.length || stack[stack.length-1] === senate_arr[0]) {
            stack.push(senate_arr.shift());
        } else {
            senate_arr.shift();
            senate_arr.push(stack.pop());
        }
    }

    return stack[0] === "R" ? "Radiant" : "Dire";
};