// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/submissions/1239960988/
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") == word2.join("")
};