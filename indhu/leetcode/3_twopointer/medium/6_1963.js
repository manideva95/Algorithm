// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/description/

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    let flip = 0;
    let open = 0, close = 0
    for (let c of s) {
        if (c === ']') close++;
        if (c === '[') open++;
        if (close > open) {
            flip++;
            close--;
            open++
        }
    }
    return flip
};