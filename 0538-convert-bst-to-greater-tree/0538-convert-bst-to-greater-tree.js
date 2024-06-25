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
var convertBST = function (root) {
    // 역 중위 순회 (Reverse In-order Traversal)
    // 오른쪽 자식 -> 현재 노드 -> 왼쪽자식
    let sum = 0;
    const traverse = (node) => {
        if (!node) return;
        traverse(node.right)
        sum += node.val;
        node.val = sum;
        traverse(node.left)
        return node;
    }

    return traverse(root) || root;
};