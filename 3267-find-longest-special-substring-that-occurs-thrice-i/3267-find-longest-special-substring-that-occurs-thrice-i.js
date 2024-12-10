/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let left = 1; // 부분 문자열이 될 수 있는 최소 길이
    let right = s.length-3+1; // 부분 문자열이 될 수 있는 최대 길이

    const checkExists = (size) => {
        const BASE = 26;
        const MOD = 10**9+7;
        // 각 해시값의 등장 횟수를 저장할 맵
        const hashCount = new Map();
        // size만큼의 길이를 가진 special한 부분문자열이 3개 이상 존재하는지의 여부
        for (let i=0; i<s.length-size+1; i++) {
            let p = 0;
            let hash = 0;
            // 현재 위치에서 시작하는 문자열이 모두 같은 문자인지 확인
            while (s[i] === s[i+p] && p < size) {
                p++;
            }
            // size 길이만큼 모두 같은 문자가 아니면 건너뛰기
            if (p !== size) continue;

            // 해시값 계산
            for (let j=0; j<size; j++) {
                hash = (hash * BASE + (s[i+j].charCodeAt(0) - 'a'.charCodeAt(0))) % MOD;
            }

            // 해시값의 등장 횟수 증가
            hashCount.set(hash, (hashCount.get(hash) || 0) + 1);

            // 같은 해시값이 3번 이상 등장하면 true 반환
            if (hashCount.get(hash) >= 3) return true;
        }
        return false;
    }

    while (left <= right) {
        let mid = (left + right) / 2 | 0;
        if (checkExists(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right ? right : -1;
};