/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let cnt = 0;
    people.sort((a, b) => b - a);
    let i=0; j=people.length-1;

    while (i<=j) {
        if (people[i] + people[j] <= limit) {
            i++;
            j--;
        } else {
            i++;
        }
        cnt++;
    }
    return cnt;
};