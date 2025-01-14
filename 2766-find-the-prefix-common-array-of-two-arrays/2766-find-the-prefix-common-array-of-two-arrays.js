/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const count = new Array(n+1).fill(0);
    const result = new Array(n).fill(0);
    result[n-1] = n;
    for (let i=0; i<n-1; i++) {
        count[A[i]]++;
        count[B[i]]++;

        let add = 0;
        if (A[i] === B[i]) {
            add++;
        } else {
            if (count[A[i]] > 1) {
                add++;
            }
            if (count[B[i]] > 1) {
                add++;
            }
        }
        result[i] = (result?.[i-1] || 0) + add;
    }
    return result;
};