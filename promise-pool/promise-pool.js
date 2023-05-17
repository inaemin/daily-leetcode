/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    const bfs = async () => {
        if (!functions.length) return Promise.resolve(null);
        const p = functions.shift();
        await p();
        await bfs();
    }
    const arr = [...Array(n)].map(bfs);
    return Promise.all(arr);
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */