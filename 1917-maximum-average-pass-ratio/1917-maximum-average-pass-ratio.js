/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
    // 1명을 추가했을 때의 증가량이 큰 순으로 나열
    const mpq = new MinPriorityQueue({
        compare: (e1, e2) => {
            const g1 = (e1.pass + 1) / (e1.total + 1) - e1.pass / e1.total;
            const g2 = (e2.pass + 1) / (e2.total + 1) - e2.pass / e2.total;
            return g2 - g1;
        }
    });
    for (let [pass, total] of classes) {
        mpq.enqueue({ pass, total });
    }

    for (let i = 0; i < extraStudents; i++) {
        const { pass, total } = mpq.dequeue();
        mpq.enqueue({ pass: pass + 1, total: total + 1 });
    }

    let sum = 0;
    let size = mpq.size();
    while (!mpq.isEmpty()) {
        const { pass, total } = mpq.dequeue();
        sum += pass / total;
    }
    return sum / size;
};