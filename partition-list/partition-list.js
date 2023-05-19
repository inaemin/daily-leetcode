/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const l1 = new ListNode();
    const l2 = new ListNode();
    let n1 = l1, n2 = l2;
    let curr = head;
    while (curr) {
        if (curr.val < x) {
            n1.next = curr;
            n1 = n1.next;
        } else if (curr.val >= x) {
            n2.next = curr;
            n2 = n2.next;
        }
        curr = curr.next;
    }
    n2.next = null;
    n1.next = l2.next;
    return l1.next;
};