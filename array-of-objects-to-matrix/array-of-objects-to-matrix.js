/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
    const obj = {};
    // dfs??
    const dfs = (idx, key, value) => {
        if (typeof value !== "object" || !value) {
            if (obj[key]) obj[key][idx] = value;
            else obj[key] = {[idx]: value};
            return;
        }
        const keys = Object.keys(value);
        for (let i=0; i<keys.length; i++) {
            dfs(idx, `${key}.${keys[i]}`, value[keys[i]]);
        }
    }
    for (let i=0; i<arr.length; i++) {
        const keys = Object.keys(arr[i]);
        for (let j=0; j<keys.length; j++) {
            dfs(i, keys[j], arr[i][keys[j]]);
        }
    }

    const column = Object.keys(obj).sort();
    const values = [];
    for (let col of column) {
        values.push(obj[col]);
    }
    const result = [column];
    for (let i=0; i<arr.length; i++) {
        const row = [];
        for (let j=0; j<column.length; j++) {
            if (values[j][i] === undefined) row.push("");
            else row.push(values[j][i]);
        }
        result.push(row)
    }
    return result;
};