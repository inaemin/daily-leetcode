/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let answer = 0;
    for (let i=0; i<boxTypes.length; i++) {
        if (truckSize === 0) return answer;
        if (truckSize >= boxTypes[i][0]) {
            answer += boxTypes[i][0] * boxTypes[i][1];
            truckSize -= boxTypes[i][0];
        } else {
            answer += truckSize * boxTypes[i][1];
            truckSize -= truckSize;
        }
    }

    return answer;
};