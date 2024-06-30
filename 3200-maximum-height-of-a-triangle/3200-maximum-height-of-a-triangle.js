/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    const first = red < blue ? red : blue;
    const second = red < blue ? blue : red;
    const arr = [0, 1]
    let height = 1;
    let ball1 = arr[arr.length - 2];
    let ball2 = arr[arr.length - 1];
    while (ball1 <= first && ball2 <= second) {
        height++;
        arr.push(arr[height-2] + height)
        ball1 = arr[arr.length - 2];
        ball2 = arr[arr.length - 1];
    }
    return height - 1;
};