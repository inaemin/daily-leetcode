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
var removeNodes = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let answer = new ListNode(prev.val);
    prev = prev.next;
    while (prev) {
        if (answer.val <= prev.val) {
            const next = answer;
            answer = new ListNode(prev.val)
            answer.next = next;
        }
        prev = prev.next;
    }
    return answer;
};