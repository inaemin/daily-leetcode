/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    /**
    m개의 부케를 만들기 위한 최소값을 찾는 문제.
    bloomDay는 각 위치의 꽃이 피는 날짜가 있음. 한 부케를 만들기 위해선 k개의 꽃이 필요함. 이 꽃들은 반드시 인접해야 함. -> sorting 못함.
    꽃이 피는 최소 날짜와 최대 날짜를 구한다. -> left, right
    이 두 날짜의 평균값 날짜일 때, m 부케를 만들 수 있는지 알아본다. -> canMakeBouquets
    true라면, 더 최소인 날짜가 있을 수 있으니까 right = mid - 1
    false라면, 날짜를 늘려야 하니까 left = mid + 1
     */

    const canMakeBouquets = (days) => {
        let bouquet = 0;
        let cnt = 0;
        for (let bloom of bloomDay) {
            if (bloom <= days) {
                cnt++;
                if (cnt === k) {
                    bouquet++;
                    cnt = 0;
                }
            } else {
                cnt = 0;
            }
            if (bouquet === m) return true;
        }

        return false;
    }
    if (bloomDay.length < m*k) return -1;

    let min = Math.min(...bloomDay);
    let max = Math.max(...bloomDay);
    while (min <= max) {
        let mid = (min+max)/2|0;
        if (canMakeBouquets(mid)) {
            max = mid - 1;   
        } else {
            min = mid + 1;
        }
    }
    return min;
};