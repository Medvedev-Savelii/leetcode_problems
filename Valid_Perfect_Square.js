/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var n = num ** 0.5;
    if(n % 1 > 0) return false;
    return true;
};
