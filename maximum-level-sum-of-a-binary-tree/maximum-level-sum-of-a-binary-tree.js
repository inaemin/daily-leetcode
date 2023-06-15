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
 * @return {number}
 */
var maxLevelSum = function(root) {
    const result = [];
    const bfs = (node, level=0) => {
        const queue = [node];
        while (queue.length) {
            const next = queue.shift();
            if (result[level]) result[level] = result[level] + next.val;
            else result[level] = next.val;
            if (next.left) bfs(next.left, level+1);
            if (next.right) bfs(next.right, level+1);
        }
    }
    bfs(root);
    return result.indexOf(Math.max(...result)) + 1;
};