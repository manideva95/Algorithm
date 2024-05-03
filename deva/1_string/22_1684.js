// https://leetcode.com/problems/count-the-number-of-consistent-strings/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let result = 0
    let set = new Set(allowed)
    for (let word of words) {
        if (word.split("").every((letter) => set.has(letter))) {
            result++
        }
    }
    return result
};