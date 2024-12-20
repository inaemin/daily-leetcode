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
var reverseOddLevels = function(root) {
    const odd = {};
    const dfs = (node) => {
        if (node.depth % 2 === 1) {
            if (!odd[node.depth]) {
                odd[node.depth] = [];
            }
            odd[node.depth].push(node.node);
        }
        if (node.node.left) {
            dfs({node: node.node.left, depth: node.depth + 1});
        }
        if (node.node.right) {
            dfs({node: node.node.right, depth: node.depth + 1});
        }
    }
    dfs({node: root, depth: 0});

    for (let nodes of Object.values(odd)) {
        const values = nodes.map(el => el.val);
        values.reverse();
        nodes.forEach((el, idx) => el.val = values[idx]);
    }

    return root;
};