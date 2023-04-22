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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    const depth = (node) => {
        if (!node) return 0;

        const left = depth(node.left);
        const right = depth(node.right);
        // implementation
        diameter = Math.max(diameter, left+right)

        return Math.max(left, right) + 1// 리턴값은 자식노드의 depth값.
    }

    depth(root)
    return diameter;
};