/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let one = dummy;
    let two = dummy.next.next;
    let three = two;
    for (let i=0; i<=n-2; i++) {
        three = three.next;
    }

    while (three) {
        one = one.next;
        two = two.next;
        three = three.next;
    }

    one.next = two;
    return dummy.next;
};