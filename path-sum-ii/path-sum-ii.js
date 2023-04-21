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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum, subset=[], result=[]) {
    if (!root) return result;
    if (!root.left && !root.right && root.val === targetSum) {
        result.push([...subset, root.val]);
        return result;
    }

    subset.push(root.val);
    pathSum(root.left, targetSum - root.val, subset, result)
    pathSum(root.right, targetSum - root.val, subset, result)
    subset.pop();

    return result;
};