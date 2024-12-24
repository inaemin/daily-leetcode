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
var minimumOperations = function(root) {
    let count = 0;
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const currValues = [];
        const nextNodes = [];
        for (let i=0; i<queue.length; i++) {
            currValues.push(queue[i].val);
            if (queue[i].left)
                nextNodes.push(queue[i].left);
            if (queue[i].right)
                nextNodes.push(queue[i].right);
        }
        count += countSwaps(currValues);
        queue = nextNodes;
    }

    return count;
};

// 직접 스왑하는 방식
// function countSwaps(arr) {
//     const sorted_arr = [...arr].sort((a, b) => a - b);
//     const arr_position = {};
//     for (let i=0; i<arr.length; i++) {
//         arr_position[arr[i]] = i;
//     }
//     let swaps = 0;
//     for (let i=0; i<sorted_arr.length; i++) {
//         if (arr[i] === sorted_arr[i]) continue;
//         let curr_idx = arr_position[sorted_arr[i]];
//         let curr_value = sorted_arr[i];
//         let tmp = arr[i];
//         arr[i] = curr_value;
//         arr[curr_idx] = tmp;
//         arr_position[curr_value] = i;
//         arr_position[tmp] = curr_idx;
//         swaps++;
//     }

//     return swaps;
// }

// 사이클 기반 접근 방식
function countSwaps(arr) {
    const n = arr.length;
    // 값과 원래 인덱스를 저장한 객체 배열 생성
    const arrPos = arr.map((val, idx) => ({val, idx}));
    // 값 기준으로 정렬
    arrPos.sort((a, b) => a.val - b.val);

    const visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i=0; i<n; i++) {
        // 이미 정렬된 위치이나, 사이클에 속하는 경우 스킵
        if (visited[i] || arrPos[i].idx === i) continue;

        let cycleSize = 0;
        let j = i;
        while (!visited[j]) {
            visited[j] = true;
            j = arrPos[j].idx;
            cycleSize++;
        }

        if (cycleSize > 0) {
            swaps += (cycleSize - 1);
        }
    }
    return swaps;
}