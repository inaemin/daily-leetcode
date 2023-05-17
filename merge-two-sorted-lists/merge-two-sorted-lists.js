/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const answer = new ListNode();
    let curr = answer;
    let n1 = list1;
    let n2 = list2;
    while (n1 || n2) {
        if (!n1) {
            curr.next = n2;
            n2 = null;
        } else if (!n2) {
            curr.next = n1;
            n1 = null;
        } else if (n1.val > n2.val) {
            curr.next = n2;
            n2 = n2.next;
        } else if (n1.val <= n2.val) {
            curr.next = n1;
            n1 = n1.next;
        }
        curr = curr.next;
    }
    return answer.next;
};