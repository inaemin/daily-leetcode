/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    const mpq = new MaxPriorityQueue({ priority: (el) => el.value });
    for (let gift of gifts) {
        mpq.enqueue({ value: gift });
    }

    for (let i = 0; i < k; i++) {
        const { element: { value } } = mpq.dequeue();
        const root = Math.floor(value ** 0.5)
        mpq.enqueue({ value: root });
    }

    let sum = 0;
    while (!mpq.isEmpty()) {
        const { element: { value } } = mpq.dequeue();
        sum += value;
    }

    return sum;
};