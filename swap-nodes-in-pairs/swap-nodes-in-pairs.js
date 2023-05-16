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
var swapPairs = function(head) {
    // k, k+1, k+2, k+3
    // k -> k+2
    // k+2 -> k+1
    // k+1 -> k+3
    const findKth = (node, k) => {
        let cnt = 0;
        let curr = node;
        while (cnt < k) {
            if (!curr) return null;
            curr = curr.next;
            cnt += 1;
        }
        return curr;
    }
    const dummy = new ListNode();
    dummy.next = head;
    let zero = findKth(dummy, 0);
    let one = findKth(dummy, 1);
    let two = findKth(dummy, 2);
    let three = findKth(dummy, 3);
    let k = 0
    while (one && two) {
        zero.next = two;
        two.next = one;
        one.next = three;
        zero = findKth(dummy, k+2);
        one = findKth(dummy, k+3);
        two = findKth(dummy, k+4);
        three = findKth(dummy, k+5);
        k += 2;
    }

    return dummy.next;
};