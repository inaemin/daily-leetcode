/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let n1 = headA;
    let n2 = headB;
    while (n1 && n2) {
        if (n1 === n2) return n1;
        if (!n1.next && !n2.next) return null;
        n1 = n1.next ? n1.next : headB;
        n2 = n2.next ? n2.next : headA;
    }
};