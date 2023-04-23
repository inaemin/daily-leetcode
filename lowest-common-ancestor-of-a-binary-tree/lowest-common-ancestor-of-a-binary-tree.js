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
    const findNode = (node) => {
        if (!node) return false;
        const left = findNode(node.left)
        const right = findNode(node.right)
        // implementation
        // left, right, node.val === p, node.val === q중에 2개 이상이 true여야 함.
        let true_cnt = 0;
        left ? true_cnt++ : "";
        right ? true_cnt++ : "";
        node.val === p.val || node.val === q.val ? true_cnt++ : "";
        console.log(node.val)
        if (true_cnt >= 2) return node;
        return left || right || node.val === p.val || node.val === q.val;
    }

    return findNode(root);
};