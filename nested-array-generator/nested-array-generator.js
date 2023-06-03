/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    for (let i=0; i<arr.length; i++) {
        if (!Array.isArray(arr[i])) yield arr[i];
        else yield* inorderTraversal(arr[i]);
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */