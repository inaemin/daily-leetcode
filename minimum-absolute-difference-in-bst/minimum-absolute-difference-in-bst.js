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
var getMinimumDifference = function(root) {
    const result = [];
    const dfs = (node) => {
        if (!node) return;
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    result.sort((a, b) => a - b);
    let answer = Infinity;
    for (let i=0; i<result.length-1; i++) {
        answer = Math.min(answer, result[i+1] - result[i]);
    }
    return answer;
};