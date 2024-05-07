/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    const arr = [];
    const dfs = (head) => {
        if (!head.next) {
            arr.push(head.val)
            return;
        }
        arr.push(head.val);
        dfs(head.next);
    }
    dfs(head)
    const num_arr = [0];
    for (let i=arr.length-1; i>=0; i--) {
        let temp = num_arr[0]
        num_arr[0] = (temp + arr[i] * 2) % 10;
        num_arr.unshift((temp + arr[i] * 2) / 10 | 0);
    }
    while (num_arr[0] === 0) {
        num_arr.shift()
    }
    console.log(num_arr)
    const ans = new ListNode(num_arr?.[0] || 0);
    let num_head = ans;
    for (let i=0; i<num_arr.length-1; i++) {
        num_head.next = new ListNode(num_arr[i+1])
        num_head = num_head.next;
    }
    return ans;
};