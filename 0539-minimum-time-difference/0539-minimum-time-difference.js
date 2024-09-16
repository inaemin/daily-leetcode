/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const timePointsToNum = timePoints.map(el => {
        const [h, m] = el.split(":");
        return Number(h)*60 + Number(m);
    }).sort((a, b) => a - b);

    let min_diff = timePointsToNum[1] - timePointsToNum[0];
    for (let i=1; i<timePointsToNum.length; i++) {
        const diff = (i === timePointsToNum.length - 1)
         ? timePointsToNum[0] - timePointsToNum[i] + 24*60
         : timePointsToNum[i+1] - timePointsToNum[i];
        
        if (diff < min_diff)
            min_diff = Math.min(diff, min_diff);
    }

    return min_diff;
};