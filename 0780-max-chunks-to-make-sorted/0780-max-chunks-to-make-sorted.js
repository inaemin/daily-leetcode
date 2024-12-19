/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const stack = [];
    let chunk = 0;
    let max = -1;
    for (let i=0; i<arr.length; i++) {
        const num = arr[i];
        while (stack.at(-1) > num) {
            max = Math.max(max, stack.pop());
        }
        if (num > max) {
            stack.push(num);
        } else {
            stack.push(max);
        }
        if (stack.at(-1) === i) {
            chunk++;
        }
    }
    return chunk;
};