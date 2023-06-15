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
    const result = {}
    const bfs = (node, level=1) => {
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

    const sum_result = {};
    for (let i=0; i<Object.keys(result).length; i++) {
        const level = Object.keys(result)[i];
        const sum = result[level];
        if (sum_result[sum]) sum_result[sum] = Math.min(sum_result[sum], level);
        else sum_result[sum] = level;
    }
    return sum_result[Math.max(...Object.keys(sum_result))];
};