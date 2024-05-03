// https://leetcode.com/problems/reverse-prefix-of-word/description/
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch)
    let reversedSubstring = word.substring(0, index + 1).split("").reverse().join("")
    let remainingString = word.substring(index + 1, word.length)
    console.log(reversedSubstring + remainingString)
    return reversedSubstring + remainingString
};