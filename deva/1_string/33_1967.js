// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let output = 0
    for (let pattern of patterns) {
        if (word.includes(pattern)) {
            output++
        }
    }
    return output
};