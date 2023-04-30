/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let sum1 = 0, sum2 = 0;
    let burning = -1;
    for (let i=0; i<player1.length; i++) {
        sum1 += i <= burning ? 2*player1[i] : player1[i];
        if (player1[i] === 10) burning = i + 2;
    }
    burning = -1;
    for (let i=0; i<player2.length; i++) {
        sum2 += i <= burning ? 2*player2[i] : player2[i];
        if (player2[i] === 10) burning = i + 2;
    }
    
    if (sum1 === sum2) return 0
    else if (sum1 > sum2) return 1;
    else return 2;
};