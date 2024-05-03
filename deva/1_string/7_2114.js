// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/submissions/1239864130/
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let result = 0
    for (sentence of sentences) {
        result = Math.max(sentence.split(" ").length, result)
    }
    return result
};