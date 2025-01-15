/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    // 각각의 비트 개수를 세고
    // num1과 num2의 비트개수가 같으면 num1를 리턴
    // 다르다면 num1의 최대 비트 자리에서 제일 가까운 num2의 비트 개수만큼 가진 숫자를 리턴
    const num1_original = num1;
    const num1_bits = [];
    let num1_bits_cnt = 0;
    while (num1 > 0) {
        if (num1 % 2 === 1) {
            num1_bits_cnt++;
        }
        num1_bits.push(num1 % 2);
        num1 = num1/2|0;
    }

    let num2_bits_cnt = 0;
    while (num2 > 0) {
        if (num2 % 2 === 1) {
            num2_bits_cnt++;
        }
        num2 = num2/2|0;
    }

    if (num1_bits.length < num2_bits_cnt) {
        let x = 1;
        while (--num2_bits_cnt > 0) {
            x <<= 1;
            x ^= 1;
        }
        return x;
    } else if (num1_bits_cnt === num2_bits_cnt) {
        return num1_original;
    } else if (num1_bits_cnt < num2_bits_cnt) {
        const x_bits = [...num1_bits];
        let left_bits_cnt = num2_bits_cnt - num1_bits_cnt;
        for (let i=0; i<x_bits.length; i++) {
            if (left_bits_cnt <= 0) break;
            if (x_bits[i] === 0) {
                x_bits[i] = 1;
                left_bits_cnt--;
            }
        }
        let x = 1;
        for (let i=x_bits.length-2; i>=0; i--) {
            x <<= 1;
            if (x_bits[i] === 1) {
                x ^= 1;
            }
        }
        return x;
    } else if (num1_bits_cnt > num2_bits_cnt) {
        const x_bits = [...num1_bits];
        let left_bits_cnt = num1_bits_cnt - num2_bits_cnt;
        for (let i=0; i<x_bits.length; i++) {
            if (left_bits_cnt <= 0) break;
            if (x_bits[i] === 1) {
                x_bits[i] = 0;
                left_bits_cnt--;
            }
        }
        let x = 1;
        for (let i=x_bits.length-2; i>=0; i--) {
            x <<= 1;
            if (x_bits[i] === 1) {
                x ^= 1;
            }
        }
        return x;
    }
};