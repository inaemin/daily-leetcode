/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca;
    const findNode = (node) => {
        if (!node) return 0;
        const left = findNode(node.left) ? 1 : 0;
        const right = findNode(node.right) ? 1 : 0;
        const self = node.val === p.val || node.val === q.val ? 1 : 0;
        if (left + right + self >= 2) lca = node;
        return left + right + self > 0;
    }

    findNode(root);
    return lca;
};