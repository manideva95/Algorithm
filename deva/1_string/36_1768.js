// https://leetcode.com/problems/merge-strings-alternately/description/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0
    let result = ""
    while (word1[i] || word2[i]) {
        result += (word1[i] ? word1[i] : "") + (word2[i] ? word2[i] : "")
        i++;
    }
    return result
};