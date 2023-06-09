/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let middle = (left + right) / 2 | 0;
            if (arr[middle].charCodeAt(0) === target.charCodeAt(0)) {
                while (arr[middle] === arr[middle + 1]) middle++;
                return arr[middle + 1];
            }
            else if (arr[middle].charCodeAt(0) < target.charCodeAt(0)) {
                left = middle + 1;
            } else if (arr[middle].charCodeAt(0) > target.charCodeAt(0)) {
                right = middle - 1;
            }
        }
        return arr[left];
    }

    return binarySearch(letters, target) || letters[0];
};