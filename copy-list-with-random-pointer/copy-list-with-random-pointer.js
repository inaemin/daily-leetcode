/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // node의 정보들이 들어있는 hashmap 이용하기
    const nodes = new Map();
    const dummy = new Node();
    let oldcurr = head;
    let newcurr = dummy
    while (oldcurr) {
        newcurr.next = new Node(oldcurr.val);
        newcurr = newcurr.next;
        nodes.set(oldcurr, newcurr); // old - new
        oldcurr = oldcurr.next;
    }
    oldcurr = head;
    newcurr = dummy.next;
    while (oldcurr) {
        newcurr.random = nodes.get(oldcurr.random);
        oldcurr = oldcurr.next;
        newcurr = newcurr.next;
    }
    return dummy.next;
};