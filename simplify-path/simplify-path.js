/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const answer = []
    const path_arr = path.split("/").filter(el => el !== "");
    path_arr.forEach((el, idx) => {
        if (el === ".") {} 
        else if (el === "..") { answer.pop() }
        else {
            answer.push(el)
        }
    })

    return `/${answer.join("/")}`;
};