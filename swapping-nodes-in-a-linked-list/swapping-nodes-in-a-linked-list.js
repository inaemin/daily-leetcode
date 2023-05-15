/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    const countNode = (node) => {
        let cnt = 0;
        let curr = node;
        while (curr) {
            cnt += 1;
            curr = curr.next;
        }
        return cnt;
    }
    const findkth = (k, node) => {
        let curr = node;
        let cnt = 1;
        while (cnt < k) {
            cnt += 1;
            curr = curr.next;
        }
        return curr;
    }
    const n = countNode(head);
    const front_curr = findkth(k, head);
    const back_curr = findkth(n-k+1, head);
    const temp = front_curr.val;
    front_curr.val = back_curr.val;
    back_curr.val = temp;
    return head;
};