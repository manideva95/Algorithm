// https://leetcode.com/problems/sorting-the-sentence/
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let jumbledSentenceArr = s.split(" ");
    let result = [];
    for (let word of jumbledSentenceArr) {
      result[word.slice(word.length - 1) - 1] = word.slice(0, word.length - 1);
    }
  //   console.log(result);
    return result.join(" ")
  };