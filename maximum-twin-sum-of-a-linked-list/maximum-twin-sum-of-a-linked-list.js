/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    const mid = arr.length/2 - 1
    let max = 0;
    for (let i=0; i<=mid; i++) {
        if (arr[mid-i] + arr[mid+1+i] > max) {
            max = arr[mid-i] + arr[mid+1+i];
        }
    }
    return max;
};