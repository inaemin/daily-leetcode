/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function") return false
    return classFunction.prototype.isPrototypeOf(Object(obj));
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */