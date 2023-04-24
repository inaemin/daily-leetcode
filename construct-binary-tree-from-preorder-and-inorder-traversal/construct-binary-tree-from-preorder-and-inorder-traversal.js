/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 class TreeNode {
     constructor(val, left, right) {
         this.val = (val === undefined ? 0 : val)
         this.left = (left === undefined ? null : left)
         this.right = (right === undefined ? null : right)
     }
 }

var buildTree = function(preorder, inorder) {
    const hashmap = new Map(); // inorder index를 빨리 찾기 위한 map.
    inorder.forEach((el, idx) => {
        hashmap.set(el, idx);
    })

    const maketree = (pre_start, pre_end, in_start, in_end) => {
        if (pre_start > pre_end || in_start > in_end) return null;

        const root = new TreeNode(preorder[pre_start]);
        let idx = hashmap.get(preorder[pre_start]);
        let leftSize = idx - in_start
        root.left = maketree(pre_start+1, pre_start+leftSize, in_start, idx-1) // leftnode
        root.right = maketree(pre_start+leftSize+1, pre_end, idx+1, in_end) // rightnode
        return root;
    }

    return maketree(0, preorder.length-1, 0, inorder.length-1);
};