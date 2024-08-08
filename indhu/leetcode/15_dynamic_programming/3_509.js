// https://leetcode.com/problems/fibonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0

    let sum = 0, prev = 1
    for (let i = 0; i < n; i++) {
        let temp = prev;
        prev = sum
        sum += temp;
    }
    return sum
};