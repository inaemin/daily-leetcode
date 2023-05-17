/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        if (slow === fast) return true;
        slow = slow.next;
    }
    return false;
};