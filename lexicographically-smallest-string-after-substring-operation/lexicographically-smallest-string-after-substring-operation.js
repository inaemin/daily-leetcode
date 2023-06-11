/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
    let answer = "";
    const arr = s.split("a");
    let status = false;
    for (let i=0; i<arr.length; i++) {
        if (!status && arr[i] !== "") {
            let temp = ""
            for (let j=0; j<arr[i].length; j++) {
                temp += String.fromCharCode(arr[i][j].charCodeAt(0) - 1)
            }
            arr[i] = temp;
            status = true;
        }
    }
    answer = arr.join("a");
    
    if (!status) {
        if (s[s.length-1] === "a") {
            answer = s.slice(0, s.length-1) + "z"
        } else {
            answer = s.slice(0, s.length-1) + String.fromCharCode(s[s.length-1].charCodeAt(0) - 1)
        }
    }
    
    return answer;
};