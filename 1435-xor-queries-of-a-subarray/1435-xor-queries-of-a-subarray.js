/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const accArr = arr.reduce((acc, ele) => {
        if (!acc.length) {
            acc.push(ele);
        } else {
            acc.push(acc.at(-1) ^ ele);
        }
        return acc;
    }, []);

    return queries.map(el => {
        const [left, right] = el;
        let result;
        if (left === 0) {
            result = accArr[right];
        } else {
            result = accArr[right] ^ accArr[left-1];
        }
        return result;
    });
};