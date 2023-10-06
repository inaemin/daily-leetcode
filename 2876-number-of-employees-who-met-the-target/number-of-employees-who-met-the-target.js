/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let answer = 0;
    for (let hour of hours) {
        if (hour >= target) answer++;
    }
    return answer;
};