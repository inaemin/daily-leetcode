/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let unplaced = 0;
    const n = fruits.length;
    const used = Array(n).fill(0);
    for (let i=0; i<n; i++) {
        let placed = false;
        for (let j=0; j<n; j++) {
            if (used[j] === 1) continue;
            if (fruits[i] <= baskets[j]) {
                used[j] = 1;
                placed = true;
                break;
            }
        }
        if (placed === false) {
            unplaced++;
        }
    }
    return unplaced;
};