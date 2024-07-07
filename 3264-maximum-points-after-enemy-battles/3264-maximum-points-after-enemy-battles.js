/**
 * @param {number[]} enemyEnergies
 * @param {number} currentEnergy
 * @return {number}
 */
var maximumPoints = function(enemyEnergies, currentEnergy) {
    enemyEnergies.sort((a, b) => a - b);
    if (currentEnergy < enemyEnergies[0]) return 0;

    let i=0; j=enemyEnergies.length-1;
    let point = 0;
    while (i <= j) {
        point += Math.floor(currentEnergy / enemyEnergies[i]);
        currentEnergy %= enemyEnergies[i];
        currentEnergy += enemyEnergies[j];
        j--;
    }
    return point;
};