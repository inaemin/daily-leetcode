/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let satisfied = 0;
    for (let i=0; i<customers.length; i++) {
        if (i < minutes) satisfied += customers[i];
        else if (!grumpy[i]) satisfied += customers[i];
    }
    let max = satisfied;
    for (let i=1; i<=customers.length-minutes; i++) {
        satisfied -= grumpy[i-1] ? customers[i-1] : 0;
        satisfied += grumpy[i-1+minutes] ? customers[i-1+minutes] : 0;
        max = Math.max(max, satisfied)
    }
    return max;
};