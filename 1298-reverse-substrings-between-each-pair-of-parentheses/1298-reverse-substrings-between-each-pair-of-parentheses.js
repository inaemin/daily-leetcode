/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    /*
    1. arr에 s[i]를 push.
    2. `)`를 만나면 arr.pop()을 pop 배열에 push
    3. pop 배열을 초기화
    4. s 문자열을 다 iterate할 때까지 진행.
    5. arr.join("")을 리턴.
     */
    const arr = [];
    let pop = [];
    let i=0;
    while (i < s.length) {
        if (s[i] === ")") {
            let j = arr.length-1;
            while (arr[j] !== "(") {
                pop.push(arr.pop());
                j--;
            }
            arr.pop();
            arr.push(...pop);
            pop = []
        } else {
            arr.push(s[i]);
        }
        i++;
    }
    return arr.join("");
};