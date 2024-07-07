/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    const n = colors.length;
    let count = 0;
    for (let i=0; i<colors.length; i++) {
        const f = i;
        const s = (i+1) % n;
        const t = (i+2) % n;
        if (colors[f] !== colors[s] && colors[s] !== colors[t] && colors[f] === colors[t]) {
            count++;
        }
    }

    return count;
};