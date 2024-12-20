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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    const queue = [];
    queue.push({node: root, depth: 0});
    const odd = [];
    while (queue.length) {
        const head = queue.shift();
        if (head.depth % 2 === 1) {
            odd.push(head.node);
        } else if (head.depth % 2 === 0 && odd.length) {
            const values = odd.map(el => el.val);
            values.reverse();
            odd.forEach((el, idx) => el.val = values[idx]);
            odd.length = 0;
        }
        if (head.node.left) {
            queue.push({node: head.node.left, depth: head.depth+1});
        }
        if (head.node.right) {
            queue.push({node: head.node.right, depth: head.depth+1});
        }
    }
    if (odd.length) {
        const values = odd.map(el => el.val);
        values.reverse();
        odd.forEach((el, idx) => el.val = values[idx]);
        odd.length = 0;
    }

    return root;
};