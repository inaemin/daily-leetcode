/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let idx = 0;
    const local = [];
    let p = head;
    while (p && p.next && p.next.next) {
        const n1 = p.val;
        const n2 = p.next.val;
        const n3 = p.next.next.val;
        if (n1 > n2 && n3 > n2) {
            local.push(idx + 1)
        }
        if (n1 < n2 && n3 < n2) {
            local.push(idx + 1);
        }

        p = p.next;
        idx++;
    }

    if (local.length < 2) return [-1, -1];
    let min_distance = Infinity;
    for (let i=0; i<local.length-1; i++) {
        min_distance = Math.min(min_distance, local[i+1] - local[i]);
    }
    return [min_distance, local[local.length-1] - local[0]];
};