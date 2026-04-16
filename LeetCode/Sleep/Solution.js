1/**
2 * @param {number} millis
3 * @return {Promise}
4 */
5async function sleep(millis) {
6    return new Promise((res, rej) => {
7        setTimeout(() => {
8            res(millis);
9        }, millis)
10    })
11}
12
13/** 
14 * let t = Date.now()
15 * sleep(100).then(() => console.log(Date.now() - t)) // 100
16 */