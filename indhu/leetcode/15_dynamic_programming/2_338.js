// https://leetcode.com/problems/counting-bits/description/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    if (n === 0) return [0]
    let result = Array(n + 1).fill(0);
    result[0] = 0; result[1] = 1;

    for (let i = 2; i < result.length; i++) {
        if (i % 2)
            result[i] = result[Math.floor(i / 2)] + 1
        else
            result[i] = result[Math.floor(i / 2)]
    }
    return result;
};