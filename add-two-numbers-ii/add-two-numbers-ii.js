/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const findListSize = (node) => {
        let cnt = 0;
        while (node) {
            cnt += 1;
            node = node.next;
        }
        return cnt;
    }
    const findKthNum = (node, k) => {
        let cnt = 0;
        while (node) {
            if (cnt === k) return node.val;
            cnt += 1;
            node = node.next;
        }
    }
    const m = findListSize(l1);
    const n = findListSize(l2);
    let prev = null;
    let carry = 0;
    for (let i=1; i<=Math.max(m, n); i++) {
        let n1 = m < i ? 0 : findKthNum(l1, m-i);
        let n2 = n < i ? 0 : findKthNum(l2, n-i);
        const newNode = new ListNode((carry+n1+n2)%10);
        carry = Math.floor((carry+n1+n2) / 10)
        newNode.next = prev;
        prev = newNode;               
    }
    
    if (carry) return new ListNode(carry, prev);
    return prev;
};