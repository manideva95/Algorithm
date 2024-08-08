// https://leetcode.com/problems/sqrtx/description/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let start = 0, end = x;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid * mid > x) end = mid - 1;
        else start = mid + 1;
    }
    return start - 1
};