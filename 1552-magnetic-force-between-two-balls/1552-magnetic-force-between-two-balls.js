/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    // 최소거리가 minDistance가 되게끔 배치가 가능한지의 여부를 리턴.
    position.sort((a, b) => a - b);
    const canPlaceMBalls = (minDistance, balls) => {
        let count = 1;
        let prev = position[0];
        for (let i=1; i<position.length; i++) {
            if (position[i] - prev >= minDistance) {
                prev = position[i];
                count++;
            }
            if (count >= balls) return true;
        }
        return false;
    }
    if (m === 2) return position.at(-1) - position[0];

    let left = 1; // 최소 거리
    let right = position.at(-1) - position[0]; // 최대 거리
    while (left <= right) {
        let mid = (left+right)/2|0;
        if (canPlaceMBalls(mid, m)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left -1;
};