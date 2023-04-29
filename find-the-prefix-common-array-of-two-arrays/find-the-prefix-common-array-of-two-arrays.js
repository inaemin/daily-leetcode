/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const setA = new Set();
    const C = [];
    for (let i=0; i<A.length; i++) {
        setA.add(A[i]);
        let cnt = 0;
        for (let j=0; j<=i; j++) {
            if (setA.has(B[j])) cnt += 1;
        }
        C[i] = cnt;
    }
    return C;
};