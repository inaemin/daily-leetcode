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
var pathSum = function(root, targetSum, subset=[]) {
    const result = [];
    if (!root) return result;
    if (root.left === null && root.right === null && root.val === targetSum) {
        result.push([...subset, root.val]);
        return result;
    }

    subset.push(root.val);
    //if절에서 리턴된 result랑 전역변수로 설정된 result랑 다르기 때문에 전역변수 result에 push해주는 코드를 추가해야함.
    result.push(...pathSum(root.left, targetSum - root.val, subset));
    result.push(...pathSum(root.right, targetSum - root.val, subset));
    subset.pop();

    return result;
};