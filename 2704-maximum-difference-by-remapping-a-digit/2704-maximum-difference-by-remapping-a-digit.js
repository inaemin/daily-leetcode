/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let max = "";
    let max_d1;
    for (let i=0; i<String(num).length; i++) {
        if (max_d1 === String(num)[i]) {
            max += "9"
        } else if (!max_d1 && String(num)[i] !== "9") {
            max_d1 = String(num)[i];
            max += "9";
        } else {
            max += String(num)[i];
        }
    }

    let min = "";
    let min_d1;
    for (let i=0; i<String(num).length; i++) {
        if (min_d1 === String(num)[i]) {
            min += "0"
        } else if (!min_d1 && String(num)[i] !== "0") {
            min_d1 = String(num)[i];
            min += "0";
        } else {
            min += String(num)[i];
        }
    }

    return Number(max) - Number(min);
};