/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let last_prepared = customers[0][0] + customers[0][1]; // 마지막 음식이 준비된 시간
    let sum = customers[0][1]; // 기다린 시간
    for (let i=1; i<customers.length; i++) {
        // 만약 손님이 도착한 시간이 last_prepared 이후라면, 도착한 시간 + 준비되는 시간, 아니라면 last_prepared + 준비되는 시간
        last_prepared = last_prepared > customers[i][0] ? last_prepared + customers[i][1] : customers[i][0] + customers[i][1];
        sum += last_prepared - customers[i][0];
    };
    return sum / customers.length
};