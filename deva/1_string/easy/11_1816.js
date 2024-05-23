// https://leetcode.com/problems/truncate-sentence/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let sentenceArr = s.split(" ")
    return sentenceArr.slice(0, k).join(" ")
    // splice not only extracts a portion of an array but also modifies the original array. Since we are only interested in extracting a portion of the array without modifying the original one, using slice() would be more appropriate.
};