/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    // dfs
    const dfs = (v1, v2) => {
        if (typeof v1 !== "object" && typeof v2 !== "object" || typeof v1 !== typeof v2) return [v1, v2];
        if (Array.isArray(v1) !== Array.isArray(v2)) return [v1, v2];
        if (v1 === null || v2 === null) return [v1, v2];
        const keys = Object.keys(v1);
        if (keys.length) {
            const obj = {}
            for (let i=0; i<keys.length; i++) {
                const key = keys[i];
                if (v1[key] !== undefined && v2[key] !== undefined && v1[key] !== v2[key]) {
                    let newValue = dfs(v1[key], v2[key]);
                    if (newValue) obj[key] = newValue;
                }
            }
            return Object.keys(obj).length ? obj : undefined;
        }
    }

    return dfs(obj1, obj2) || {};
};