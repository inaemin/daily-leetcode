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
            let value = object[i];
            if (typeof value === "string") value = `"${value}"`
            if (typeof value === "object") value = jsonStringify(value);
            if (i === object.length-1) {
                answer += `${value}]`
            } else {
                answer += `${value},`
            }
        }
        return answer;
    }
    if (!Array.isArray(object)) {
        let answer = `{`;
        const keys = Object.keys(object);
        if (!keys.length) return answer + `}`
        for (let i=0; i<keys.length; i++) {
            let value = object[keys[i]];
            if (typeof value === "string") value = `"${value}"`
            if (typeof value === "object") value = jsonStringify(value);
            if (i === keys.length-1) {
                answer += `"${keys[i]}":${value}}`
            } else {
                answer += `"${keys[i]}":${value},`
            }
        }
        return answer;
    }
};