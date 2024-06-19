/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
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
    while (min < max) {
        let mid = (min+max)/2|0;
        if (canMakeBouquets(mid)) {
            max = mid;   
        } else {
            min = mid+1;
        }
    }
    return min;
};