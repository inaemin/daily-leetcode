/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    const result = a | b;
    if (result === c) return 0;

    let answer = 0;
    const stra = a.toString(2);
    const strb = b.toString(2);
    const strc = c.toString(2);
    for (let i=0; i<Math.max(stra.length, strb.length, strc.length); i++) {
        const pa = stra[stra.length-1-i] || "0";
        const pb = strb[strb.length-1-i] || "0";
        const pc = strc[strc.length-1-i] || "0";
        if (pc === "0") {
            if (pa === "1") answer += 1;
            if (pb === "1") answer += 1;
        } else {
            if (pa === "0" && pb === "0") answer += 1;
        }
    }

    return answer;
};