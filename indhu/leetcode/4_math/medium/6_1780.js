// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    while (n > 0) {
        let mod = n % 3;
        if (mod === 2) return false;
        n = (n - mod) / 3;
    }
    return true;
};