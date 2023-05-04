/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const radiant = [];
    const dire = [];
    const n = senate.length
    for (let i=0; i<n; i++) {
        senate[i] === "R" ? radiant.push(i) : dire.push(i);
    }

    while (radiant.length && dire.length) {
        if (radiant[0] < dire[0]) {
            dire.shift();
            radiant.push(radiant.shift() + n)
        } else if (radiant[0] > dire[0]) {
            radiant.shift();
            dire.push(dire.shift() + n)
        }
    }

    return radiant.length > dire.length ? "Radiant" : "Dire";
};