/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const t_obj = {};
    for (let i=0; i<t.length; i++) {
        t_obj[t[i]] = false;
    }
    const obj = {};
    for (let i=0; i<s.length; i++) {
        if (!obj[s[i]] && !t_obj[t[i]]) { // 초기 설정. 맵핑되어있지 않고, 사용하기 전.
            obj[s[i]] = t[i]
            t_obj[t[i]] = true;
        } else if (!obj[s[i]] && t_obj[t[i]]) { // 맵핑되어있지 않았지만, 사용되었다면.
            return false;
        } else if (obj[s[i]] !== t[i]) { // 맵핑되었지만 다른 경우.
            return false;
        }
    }
    return true;
};