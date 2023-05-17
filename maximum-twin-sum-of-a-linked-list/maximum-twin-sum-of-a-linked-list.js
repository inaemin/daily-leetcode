/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;
    let pre = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        const post = slow.next;
        slow.next = pre;
        pre = slow;
        slow = post;
    }
    let max = 0;
    while (pre) {
        const sum = pre.val + slow.val;
        if (sum > max) max = sum;
        pre = pre.next;
        slow = slow.next;
    }
    return max;
};