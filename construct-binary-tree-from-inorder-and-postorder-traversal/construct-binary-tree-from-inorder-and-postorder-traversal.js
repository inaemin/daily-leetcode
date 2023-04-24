/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

 class TreeNode {
     constructor(val, left, right) {
         this.val = (val === undefined ? 0 : val)
         this.left = (left === undefined ? null : left)
         this.right = (right === undefined ? null : right)
     }
 }

var buildTree = function(inorder, postorder) {
    const hash = new Map();
    inorder.forEach((el, idx) => { // inorder index를 빨리 찾기 위한 map.
        hash.set(el, idx);
    })

    const maketree = (in_start, in_end, post_start, post_end) => {
        if (in_start > in_end || post_start > post_end) return null;

        const tree = new TreeNode(postorder[post_end]);
        let idx = hash.get(postorder[post_end]);
        let leftSize = idx- in_start;
        tree.left = maketree(in_start, idx-1, post_start, post_start+leftSize-1)
        tree.right = maketree(idx+1, in_end, post_start+leftSize, post_end-1)

        return tree;
    }

    return maketree(0, inorder.length-1, 0, postorder.length-1)
};