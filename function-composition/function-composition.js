/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let answer = x;
        functions.reverse();
        for (let func of functions) {
            answer = func(answer)
        }
        return answer;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */