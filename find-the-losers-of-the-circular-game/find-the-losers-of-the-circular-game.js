/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const people = [...Array(n)].map((el, idx) => idx + 1);
    people.unshift(null);
    let cnt = 1;
    let ball = 1;
    while (people.length) {
        if (people[ball] === false) break;
        people[ball] = false;
        ball = (k * cnt + ball) % n;
        if (ball === 0) ball = people.length-1;
        cnt += 1;
    }
    
    return people.filter(el => el)
};