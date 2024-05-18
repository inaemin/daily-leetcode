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
var distributeCoins = function(root) {
    let moves = 0;
    const dfs = (node) => {
        if (!node) return 0;
        let sum = node.val - 1 + dfs(node.left) + dfs(node.right)
        moves += Math.abs(sum);
        return sum;
    }
    dfs(root)
    return moves;
};