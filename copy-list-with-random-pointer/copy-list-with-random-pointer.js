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
    // hashmap을 사용하지 않고 풀어보기
    // 각 노드의 clone 만들어주기
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.clone = new Node(curr.val, null, null);
        curr = curr.next;
    }
    
    // dummy와 clone노드 연결하면서 random과도 연결하기
    const dummy = new Node();
    curr = head;
    let clone = dummy;
    while (curr) {
        clone.next = curr.clone;
        clone = clone.next;
        clone.random = curr.random?.clone;
        curr = curr.next;
    }
    return dummy.next;
};