/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    /*
    i와 i+1을 비교하여 다르면 1, 같으면 0으로 맵핑.
    
     */
    const n = colors.length;
    const tiles = colors.map((color, idx) => color !== colors[(idx+1)%n] ? 1 : 0);
    
    let answer = 0;
    for (let i=0; i<tiles.length; i++) {
        if (tiles[i] === 1) {
            let count = 0;
            while (tiles[i%n] === 1 && i < n+k-2) {
                count++;
                i++;
            }
            if (count >= k-1) {
                answer += count - (k-2)
            }
        }
    }

    return answer;
};