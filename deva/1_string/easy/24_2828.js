// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    let acronym = "";
    for (let word of words) {
      acronym = acronym + word.slice(0, 1);
    }
    return acronym === s
  };