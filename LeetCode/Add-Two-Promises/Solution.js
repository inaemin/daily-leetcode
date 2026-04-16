1/**
2 * @param {Promise} promise1
3 * @param {Promise} promise2
4 * @return {Promise}
5 */
6var addTwoPromises = async function(promise1, promise2) {
7    return promise1.then((n1) => {
8        return promise2.then((n2) => {
9            return n1 + n2;
10        })
11    })
12};
13
14/**
15 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
16 *   .then(console.log); // 4
17 */