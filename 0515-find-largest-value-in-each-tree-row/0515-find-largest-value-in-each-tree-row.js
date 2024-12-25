/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root)
        return [];

    const maxValues = [];
    let queue = [root];
    while (queue.length) {
        const nextQueue = [];
        let max = queue[0].val;
        for (let i=0; i<queue.length; i++) {
            max = Math.max(max, queue[i].val);
            if (queue[i].left)
                nextQueue.push(queue[i].left);
            if (queue[i].right)
                nextQueue.push(queue[i].right);
        }
        maxValues.push(max);
        queue = nextQueue;
    }
    return maxValues;
};