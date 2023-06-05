/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    coordinates.sort((a, b) => a[0] - b[0]);
    const slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
    // 기울기가 0일때
    if (slope === 0) {
        for (let i=2; i<coordinates.length; i++) {
            if (coordinates[i][1] !== coordinates[0][1]) return false;
        }
        return true;
    }
    // 기울기가 무한일때
    if (slope === Infinity) {
        for (let i=2; i<coordinates.length; i++) {
            if (coordinates[i][0] !== coordinates[0][0]) return false;
        }
        return true;
    }

    for (let i=2; i<coordinates.length; i++) {
        const test = (coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]);
        if (test !== slope) return false;
    }

    return true;
};