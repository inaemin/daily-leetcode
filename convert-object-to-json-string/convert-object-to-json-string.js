/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if (typeof object === "string") return `"${object}"`
    if (typeof object !== "object" || !object) return `${object}`
    if (Array.isArray(object)) {
        let answer = `[`;
        if (!object.length) return answer + `]`;
        for (let i=0; i<object.length; i++) {
            let value = jsonStringify(object[i]);
            answer += i === object.length-1 ? `${value}]` : `${value},`;
        }
        return answer;
    }
    if (!Array.isArray(object)) {
        let answer = `{`;
        const keys = Object.keys(object);
        if (!keys.length) return answer + `}`
        for (let i=0; i<keys.length; i++) {
            let value = jsonStringify(object[keys[i]]);
            answer += i === keys.length-1 ? `"${keys[i]}":${value}}` : `"${keys[i]}":${value},`;
        }
        return answer;
    }
};