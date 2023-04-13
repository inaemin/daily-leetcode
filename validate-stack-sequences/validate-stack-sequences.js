/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let answer = true;
    const start_idx = pushed.indexOf(popped[0])
    let left_pushed = pushed.slice(0, start_idx+1)
    let right_pushed = pushed.slice(start_idx+1)
    for (let el of popped) {
        if (left_pushed[left_pushed.length-1] === el) left_pushed.pop()
        else if (right_pushed.indexOf(el) !== -1) {
            const slice_idx = right_pushed.indexOf(el);
            left_pushed = [...left_pushed, ...right_pushed.slice(0, slice_idx)]
            right_pushed = right_pushed.slice(slice_idx+1)
        } else {
            answer = false;
            return answer;
        }
    }

    return answer;
};