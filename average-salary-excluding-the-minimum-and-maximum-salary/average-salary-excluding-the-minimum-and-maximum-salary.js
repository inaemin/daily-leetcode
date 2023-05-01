/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = salary[0]; max = salary[0];
    let sum = 0;
    for (let sal of salary) {
        if (sal < min) min = sal;
        if (sal > max) max = sal;
        sum += sal;
    }
    sum = sum - min - max;
    return sum / (salary.length-2)
};