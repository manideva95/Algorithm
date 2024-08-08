// https://leetcode.com/problems/arranging-coins/description/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let sum = 0, i = 1
    while (sum <= n) {
        sum += i
        ++i
    }
    return sum > n ? i - 2 : i - 1
};