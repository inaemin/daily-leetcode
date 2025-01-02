/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    // string이 모음으로 시작하고 끝난다면 1, 누적합으로 배열에 저장.
    const isSpecial = (str) => {
        const vowel = ['a', 'e', 'i', 'o', 'u'];
        if (vowel.includes(str.at(-1)) && vowel.includes(str.at(0))) {
            return 1;
        }
        return 0; 
    }
    const vowel_cnt_arr = words.reduce((res, ele, idx) => {
        if (idx === 0) {
            res.push(isSpecial(ele));
        } else {
            res.push(isSpecial(ele) + res.at(-1));
        }
        return res;
    }, [])

    return queries.map(query => {
        const [start, end] = query;
        return vowel_cnt_arr[end] - (vowel_cnt_arr[start - 1] || 0)
    })
};