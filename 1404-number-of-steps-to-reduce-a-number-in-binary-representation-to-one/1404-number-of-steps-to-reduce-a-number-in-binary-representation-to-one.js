/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let arr = s.split("").map(Number);
    let cnt = 0;
    while (arr.length > 1) {
        if (arr.at(-1) === 0) {
            arr.pop()
            cnt++;
        } else {
            arr[arr.length-1] += 1;
            let start = 0;
            for (let i=arr.length-1; i>=0; i--) {
                if (arr[i] > 1) {
                    arr[i] = 0;
                    if (i === 0) {
                        start += 1;
                    } else {
                        arr[i-1] += 1;
                    }
                }
            }
            if (start) {
                arr = [start, ...arr];
            }
            cnt++;
        }
    }

    return cnt;
};