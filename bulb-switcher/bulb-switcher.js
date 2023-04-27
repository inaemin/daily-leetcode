/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    // const bulbs = Array(n+1).fill(true);
    // bulbs[0] = null;
    // for (let i=2; i<=n; i++) {
    //     for (let j=1; j<=Math.floor(n/i); j++) {
    //             bulbs[j*i] = !bulbs[j*i];
    //         }
    // }

    // return bulbs.reduce((r, e) => {
    //     if (e === true) r += e;
    //     return r;
    // }, 0)

    return Math.floor(n**0.5)
};