/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const avg = salary.sort((a, b) => a - b).reduce((r, e, i) => {
        if (i>0 && i<salary.length-1) r += e;
        return r;
    }, 0) / (salary.length-2)

    return avg;
};