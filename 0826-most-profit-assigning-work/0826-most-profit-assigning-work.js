/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const mpq = new PriorityQueue({
        compare: (a, b) => {
            if (b.profit === a.profit) {
                return a.diff - b.diff;
            }
            return b.profit - a.profit;
        }
    });

    for (let i = 0; i < difficulty.length; i++) {
        mpq.enqueue({ diff: difficulty[i], profit: profit[i] });
    }

    worker.sort((a, b) => b - a); // 내림차순 정렬
    let i = 0;
    let maxProfit = 0;
    let job = mpq.dequeue();
    
    while (i < worker.length && job) {
        if (worker[i] >= job.diff) {
            maxProfit += job.profit;
            i++;
        } else {
            job = mpq.dequeue();
        }
    }

    return maxProfit;
};