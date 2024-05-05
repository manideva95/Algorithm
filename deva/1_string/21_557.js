// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let wordsArr = s.split(" ")
    let reversedWordsArr = []
    for (let i = 0; i < wordsArr.length; i++) {
        reversedWordsArr.push(wordsArr[i].split("").reverse().join(""))
    }
    return reversedWordsArr.join(" ")
};