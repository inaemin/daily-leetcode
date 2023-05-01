/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b);
    salary.shift();
    salary.pop();
    return salary.reduce((r, e) => r + e, 0) / (salary.length)
};