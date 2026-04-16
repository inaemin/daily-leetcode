1/**
2 * @param {Function} fn
3 * @param {number} t
4 * @return {Function}
5 */
6var timeLimit = function(fn, t) {
7    
8    return async function(...args) {
9        const timeout = new Promise((_, reject) => {
10            setTimeout(() => reject("Time Limit Exceeded"), t);
11        })
12        return Promise.race([fn(...args), timeout]);
13    }
14};
15
16/**
17 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
18 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
19 */