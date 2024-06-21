/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let firstWindow = 0;
    for (let i=0; i<minutes; i++) {
        firstWindow += customers[i];
    }
    for (let i=minutes; i<customers.length; i++) {
        firstWindow += grumpy[i] ? 0 : customers[i];
    }

    let window = firstWindow;
    let max = window;
    for (let i=1; i<=customers.length-minutes; i++) {
        window -= grumpy[i-1] ? customers[i-1] : 0;
        window += grumpy[i+minutes-1] ? customers[i+minutes-1] : 0;
        max = Math.max(max, window);
    }
    return max;
};