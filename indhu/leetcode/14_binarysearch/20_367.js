// https://leetcode.com/problems/valid-perfect-square/description/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num === 1) return true;

    let start = 1, end = Math.floor(num / 2);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if ((mid * mid) === num) return true

        if ((mid * mid) > num) end = mid - 1;
        else start = mid + 1;
    }
    return false

};