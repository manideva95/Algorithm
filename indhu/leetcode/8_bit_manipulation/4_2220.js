// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    return (start ^ goal).toString(2).replace(/0/g, "").length
};