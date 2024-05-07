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
var doubleIt = function(head) {
    const arr = [];
    let current = head;
    let carry = 0;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    current = null;
    while (arr.length) {
        const newValue = arr.pop() * 2 + carry;
        carry = newValue / 10 | 0;
        current = new ListNode(newValue % 10, current);
    }
    if (carry) {
        current = new ListNode(carry, current)
    }
    return current;
};