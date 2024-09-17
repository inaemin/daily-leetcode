/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const m1 = {};
    const m2 = {};

    s1.split(" ").forEach(el => {
        m1[el] = (m1?.[el] || 0) + 1;
    })

    s2.split(" ").forEach(el => {
        m2[el] = (m2?.[el] || 0) + 1;
    })

    const result = [];
    Object.keys(m1).forEach(el => {
        if (m1[el] === 1 && !m2[el]) {
            result.push(el);
        }
    })
    Object.keys(m2).forEach(el => {
        if (m2[el] === 1 && !m1[el]) {
            result.push(el);
        }
    })

    return result;
};