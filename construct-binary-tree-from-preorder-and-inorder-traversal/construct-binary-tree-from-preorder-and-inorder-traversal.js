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
    // const hashmap = new Map(); // inorder index를 빨리 찾기 위한 map.
    // inorder.forEach((el, idx) => {
    //     hashmap.set(el, idx);
    // })

    const maketree = (preo, ino, root) => {
        if (!preo.length || !ino.length) return null;

        root = new TreeNode(preo[0]);
        let inoIdx = ino.indexOf(preo[0]);
        root.left = maketree(preo.slice(1, inoIdx+1), ino.slice(0, inoIdx), root) // leftnode
        root.right = maketree(preo.slice(inoIdx+1), ino.slice(inoIdx + 1), root) // rightnode
        return root;
    }

    return maketree(preorder, inorder);
};