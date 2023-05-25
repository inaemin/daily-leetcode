/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const result = [];
    const numOfElements = Math.ceil(arr.length/size);
    for (let i=0; i<numOfElements; i++) {
        const element = [];
        for (let j=0; j<size; j++) {
            let ele = arr[i*size + j]
            if (ele !== undefined) element.push(ele);
        }
        result.push(element);
    }

    return result;
};