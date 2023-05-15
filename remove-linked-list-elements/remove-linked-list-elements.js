/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // recursive solution
    const recur = (node) => {
        if (!node) return null;
        const nextNode = recur(node.next)
        if (node.val === val) {
            return nextNode;
        } else {
            node.next = nextNode;
            return node;
        }
    }
    return recur(head);
};