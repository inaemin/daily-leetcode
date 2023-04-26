/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let answer;
    const s_arr = [...s].reduce((r, e) => {
        // 문자열에 0이 있는 경우, 무조건 앞 원소가 있어야 하고, 합쳤을 때 1과 26 사이에 있는 수여야 함.
        if (e === "0") {
            let last_num = `${r[r.length-1]}0`;
            if (last_num === "10" || last_num === "20") {
                r.pop();
                r.push(`${r[r.length-1]}0`);
            } else {
                // 아닌 경우에는 
                answer = -1;
            }
        } else r.push(e);
        return r;
    }, [])

    if (answer === -1) return 0;
    
    const dp = [];
    s_arr.reverse();
    for (let i=0; i<s_arr.length; i++) {
        if (i === 0) dp.push(1);
        else {
            // s_arr[i] -> 통과 -> dp[i-1]
            // s_arr[i]와 s_arr[i-1] -> 통과 -> dp[i-2]
            let p = dp[i-1];
            let double_digit = Number(`${s_arr[i]}${s_arr[i-1]}`);
            if (double_digit >= 1 && double_digit <= 26) {
                p += dp[i-2] ? dp[i-2] : 1;
            }
            dp.push(p);
        }
    }

    return dp[dp.length-1];
};