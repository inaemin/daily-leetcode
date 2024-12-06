var canChange = function(start, target) {
    const start_l_idx = [];
    const start_r_idx = [];
    const target_l_idx = [];
    const target_r_idx = [];

    for (let i=0; i<start.length; i++) {
        if (start[i] === 'L') {
            start_l_idx.push(i);
        } else if (start[i] === 'R') {
            start_r_idx.push(i);
        }
        if (target[i] === 'L') {
            target_l_idx.push(i);
        } else if (target[i] === 'R') {
            target_r_idx.push(i);
        }
    }
    
    // L과 R의 개수가 다르면 불가능
    if (start_l_idx.length !== target_l_idx.length || 
        start_r_idx.length !== target_r_idx.length) {
        return false;
    }
    
    // L은 왼쪽으로만 이동 가능
    for (let i = 0; i < start_l_idx.length; i++) {
        if (start_l_idx[i] < target_l_idx[i]) {
            return false;
        }
    }
    
    // R은 오른쪽으로만 이동 가능
    for (let i = 0; i < start_r_idx.length; i++) {
        if (start_r_idx[i] > target_r_idx[i]) {
            return false;
        }
    }
    
    // L과 R의 상대적 순서가 유지되어야 함
    let startOrder = '';
    let targetOrder = '';
    for (let i = 0; i < start.length; i++) {
        if (start[i] !== '_') startOrder += start[i];
        if (target[i] !== '_') targetOrder += target[i];
    }
    
    return startOrder === targetOrder;
};