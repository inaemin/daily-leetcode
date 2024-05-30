/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    const n = arr.length;
    const xor = Array.from({length: n+1}, () => 0);
    for (let i=0; i<n; i++) {
        xor[i+1] = xor[i] ^ arr[i];
    }
    let result = 0;
    for (let i=0; i<xor.length; i++) {
        for (let j=i+1; j<xor.length; j++) {
            if (xor[i] === xor[j+1]) {
                result += j-i
            }
        }
    }
    return result;
};