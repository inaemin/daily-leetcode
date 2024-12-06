/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    if (start === target)
        return true;

    const start_l_index = [];
    const start_r_index = [];
    const target_l_index = [];
    const target_r_index = [];

    for (let i=0; i<start.length; i++) {
        if (start[i] === 'L') {
            start_l_index.push(i);
        } else if (start[i] === 'R') {
            start_r_index.push(i);
        }
        if (target[i] === 'L') {
            target_l_index.push(i);
        } else if (target[i] === 'R') {
            target_r_index.push(i);
        }
    }

    if (start_l_index.length !== target_l_index.length
    || start_r_index.length !== target_r_index.length)
        return false;

    const hasNumberBetween = (arr, i, j) => {
        for (let k=0; k<arr.length; k++) {
            if (arr[k] > j)
                break;
            if (arr[k] >= i && arr[k] <= j)
                return true;
        }
        return false;
    }

    // l -> start에서 target으로 갈때 인덱스보다 target이 더 왼쪽인지, 사이에
    // 다른 알파벳이 있는지 확인
    // r -> start에서 target으로 갈때 인덱스보다 target이 더 오른쪽인지, 사이에
    // 다른 알파벳이 있는지 확인
    for (let i=0; i<start_l_index.length; i++) {
        if (start_l_index[i] < target_l_index[i])
            return false;
        if (hasNumberBetween(start_r_index, target_l_index[i], start_l_index[i]))
            return false;
    }
    for (let i=0; i<start_r_index.length; i++) {
        if (start_r_index[i] > target_r_index[i])
            return false;
        if (hasNumberBetween(target_l_index, start_r_index[i], target_r_index[i]))
            return false;
    }

    return true;
};