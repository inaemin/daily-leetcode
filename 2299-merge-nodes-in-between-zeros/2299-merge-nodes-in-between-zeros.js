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
var mergeNodes = function (head) {
    let zero = head;
    let curr = head.next;
    let sum = 0;
    while (curr) {
        if (curr.val !== 0) {
            sum += curr.val;
        } else {
            zero.val = sum;
            sum = 0;
            if (curr.next) {
                zero.next = curr;
                zero = zero.next;
            } else {
                zero.next = null;
                break;
            }
        }
        curr = curr.next;
    }

    return head;
};