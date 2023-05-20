/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    l2 = slow.next;
    slow.next = null;
    l1 = head;

    // l2 reverse
    let prev = null;
    let curr = l2;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    l2 = prev;

    const answer = new ListNode();
    let pos = answer;
    while (l1 || l2) {
        if (l1) {
            pos.next = l1;
            l1 = l1.next;
            pos = pos.next;
        }
        if (l2) {
            pos.next = l2;
            l2 = l2.next;
            pos = pos.next;
        }
    }

    return answer.next;
};