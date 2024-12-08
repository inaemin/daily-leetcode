/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    events.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        } else {
            return a[0] - b[0];
        }
    })

    // 특정 이벤트까지 얻을 수 있는 최대 value 저장.
    const maxValue = new Array(events.length).fill(0);
    maxValue[0] = events[0][2];
    for (let i=1; i<events.length; i++) {
        maxValue[i] = Math.max(maxValue[i-1], events[i][2]);
    }

    let max = 0;
    for (let i=0; i<events.length; i++) {
        // 시작시간보다 더 빨리 끝나는 다른 이벤트를 찾기(이진탐색)
        // 그 이벤트들 중 value의 합이 max보다 크면 업데이트
        const [start, end, value] = events[i];
        let left = 0;
        let right = events.length-1;
        max = Math.max(events[i][2], max);
        while (left <= right) {
            let mid = (left + right) / 2 | 0;
            if (events[mid][1] < start) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (right !== -1)
            max = Math.max(maxValue[right] + value, max);
    }

    return max;
};