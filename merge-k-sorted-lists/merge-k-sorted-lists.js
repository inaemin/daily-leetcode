/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const heap = new MinPriorityQueue({ priority: x => x.val })
    for (let list of lists) {
        if (list) heap.enqueue(list);
    }
    const result = new ListNode();
    let curr = result;
    while (heap.size()) {
        const pop = heap.dequeue();
        const {val, next} = pop.element;
        curr.next = new ListNode(val);
        curr = curr.next
        if (next) heap.enqueue(next);
    }

    return result.next;
};