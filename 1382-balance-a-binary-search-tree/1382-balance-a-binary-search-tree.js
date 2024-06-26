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
var balanceBST = function(root) {
    // 이진탐색트리를 균형 잡힌 이진 탐색 트리로 변환하는 문제
    // 균형 잡힌 이진 탐색 트리란 모든 노드의 두 서브트리의 깊이 차이가 1 이하인 트리.
    // 중위 순회를 통해 정렬된 배열 생성.
    // 정렬된 배열을 이용해 배열의 중간 요소를 선택하여 트리의 루트로 설정
    // 재귀적으로 반복하여 균형 잡힌 트리 생성

    const arr = []
    const saveNode = (node) => {
        if (!node) return;
        saveNode(node.left);
        arr.push(node.val);
        saveNode(node.right);
        return node;
    }
    saveNode(root);
    
    const replaceTree = (start, end) => {
        if (start > end) return null;
        let mid = Math.floor((start+end)/2);
        const root = new TreeNode(arr[mid]);
        root.left = replaceTree(start, mid-1);
        root.right = replaceTree(mid+1, end);
        return root;
    }
    return replaceTree(0, arr.length-1);
};