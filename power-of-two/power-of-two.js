/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    /*
    2로 계속 나눠서 O(logN)의 속도로 풀 수도 있지만
    이진수로 변환했을때 1이 하나라는 사실을 이용하면 O(1)의 속도로 풀 수 있음. (bit manipulation)
     */
    if (n >= 1) return !(n & n-1)
    return false;
};