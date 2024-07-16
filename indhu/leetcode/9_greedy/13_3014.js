// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/description/

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let count = 1, result = 0;
    for (let i = 0; i < word.length; i++) {
        if (i % 8 === 0 && i) {
            count++
        }
        result += count
    }
    return result
};