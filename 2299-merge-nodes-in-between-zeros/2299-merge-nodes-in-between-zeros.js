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
var mergeNodes = function (head) {
    let p = head.next;
    const result = new ListNode();
    let r = result;
    while (p) {
        let sum = 0;
        while (p && p.val !== 0) {
            sum += p.val;
            p = p.next;
        }
        r.next = new ListNode(sum)
        r = r.next;
        p = p.next;
    }
    return result.next;
};