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
    let cnt = 0;
    while (n1 && n2 && cnt <= 2) {
        if (n1 === n2) {console.log(n1); return n1;}
        if (!n1.next) {n1 = headB; cnt++;}
        else n1 = n1.next;
        if (!n2.next) {n2 = headA; cnt++;}
        else n2 = n2.next;
    }
    return null;
};