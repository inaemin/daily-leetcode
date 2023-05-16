/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function(...args) {
      const timer = new Promise((resolve, reject) => setTimeout(() => reject("Time Limit Exceeded"), t));
      const func = new Promise((resolve, reject) => fn(...args).then(resolve).catch(reject));
      return Promise.race([timer, func]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */