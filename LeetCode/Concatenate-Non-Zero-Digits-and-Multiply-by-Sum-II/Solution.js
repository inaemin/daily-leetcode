1/**
2 * @param {string} s
3 * @param {number[][]} queries
4 * @return {number[]}
5 */
6var sumAndMultiply = function(s, queries) {
7    // 길이가 10^5까지 이므로, 이론상 10^10 이상도 가능.
8    const m = s.length;
9    const mod = 1000000007n;
10
11    const sum = new Array(m+1).fill(0); // s[0..i-1]까지의 숫자 합 (mod)
12    const cntN0 = new Array(m+1).fill(0); // s[0..i-1]까지 0이 아닌 자릿수 개수
13    const concat = new Array(m+1).fill(0n); // s[0..i-1]까지 0을 스킵하여 이어붙인 값 (mod)
14    const pow10 = new Array(m+1).fill(1n); //10^k % mod
15
16    for (let i=0; i<m; i++) {
17        sum[i+1] = sum[i] + Number(s[i]); // 커봤자 9*10**5
18        cntN0[i+1] = cntN0[i] + (s[i] === "0" ? 0 : 1); // 커봤자 10**5
19        concat[i+1] = s[i] === "0" ? concat[i] : (concat[i] * 10n + BigInt(s[i])) % mod;
20        pow10[i+1] = (pow10[i] * 10n) % mod;
21    }
22
23
24    const result = []
25    for (let [p, q] of queries) {
26        const query_sum = sum[q+1] - sum[p]
27        let x = concat[q+1];
28        x -= (concat[p] * pow10[cntN0[q+1]-cntN0[p]]) % mod;
29        if (x < 0n) x += mod;
30        result.push((x * BigInt(query_sum)) % mod)
31    }
32
33    return result.map(n => Number(n));
34};