/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const dfs = (arr, cnt=0) => {
        if (cnt === n) return arr;
        const result = [];
        for (let i=0; i<arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result.push(...dfs(arr[i], cnt+1))
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }

    return dfs(arr);
};