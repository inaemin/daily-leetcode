/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let left = 0, right = 0; // 윈도우의 시작과 끝
    const fruitMap = new Map();
    let maxFruits = 0;
    while (right < fruits.length) {
        fruitMap.set(fruits[right], (fruitMap.get(fruits[right]) || 0) + 1);
        if (fruitMap.size <= 2) {
            maxFruits = Math.max(maxFruits, right - left + 1);
        } else {
            while (fruitMap.size > 2) {
                fruitMap.set(fruits[left], fruitMap.get(fruits[left]) - 1);
                if (fruitMap.get(fruits[left]) === 0) {
                    fruitMap.delete(fruits[left])
                }
                left++;
            }
        }
        right++;
    }
    return maxFruits;
};