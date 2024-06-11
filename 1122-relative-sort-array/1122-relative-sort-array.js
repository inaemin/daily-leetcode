/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const hash = {};
    for (let i=0; i<arr1.length; i++) {
        hash[arr1[i]] = (hash?.[arr1[i]] || 0) + 1;
    }
    const result = [];
    for (let i=0; i<arr2.length; i++) {
        if (hash[arr2[i]]) {
            for (let j=0; j<hash[arr2[i]]; j++) {
                result.push(arr2[i])
            }
            delete hash[arr2[i]]
        }
    }
    const left_keys = Object.keys(hash).map(Number).sort((a, b) => a - b);
    for (let i=0; i<left_keys.length; i++) {
        for (let j=0; j<hash[left_keys[i]]; j++) {
            result.push(left_keys[i])
        }
    }
    return result;
};