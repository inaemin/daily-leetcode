/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const answer = new ListNode();
    let curr = answer;
    let n1 = l1;
    let n2 = l2;
    while (n1 || n2) {
        const v1 = n1 ? n1.val : 0;
        const v2 = n2 ? n2.val : 0;
        const carry = Math.floor((curr.val + v1 + v2) / 10);
        const remainder = (curr.val + v1 + v2) % 10;
        curr.val = remainder;
        if (n1) n1 = n1.next;
        if (n2) n2 = n2.next;
        if (n1 || n2 || carry > 0) {
            curr.next = new ListNode(carry);
            curr = curr.next;
        }
    }
    return answer;
};