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
var insertGreatestCommonDivisors = function(head) {
    const gcd = (a, b) => {
        while (b !== 0) {
            const remainder = a % b;
            a = b;
            b = remainder;
        }
        return a;
    }
    
    let cur = head;
    while (cur.next) {
        const add = gcd(cur.val, cur.next.val);
        const next = cur.next;
        cur.next = new ListNode(add, next);
        cur = cur.next.next;
    }
    
    return head;

};