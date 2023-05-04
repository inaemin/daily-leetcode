/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = {};
    for (let i=0; i<s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = [i];
        } else {
            map[s[i]].push(i);
        }
    }
    console.log(map);
    const values = Object.values(map);
    let start = values[0][0];
    let end = values[0][values[0].length-1];
    const result = [];
    for (let i=1; i<values.length; i++) {
        if (values[i][0] <= end && values[i][values[i].length-1] > end) end = values[i][values[i].length-1];
        if (values[i][0] > end) {
            result.push(end-start+1);
            start = values[i][0];
            end = values[i][values[i].length-1];
        }
    }
    result.push(end-start+1);

    return result;
};