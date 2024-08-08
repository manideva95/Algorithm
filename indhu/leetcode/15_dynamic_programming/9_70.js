// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return n;
    let result = 2, prev = 1;

    for (let i = 3; i <= n; i++) {
        let temp = prev;
        prev = result
        result += temp
    }

    return result
};