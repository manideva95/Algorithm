// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let word of words){
        if(word == word.split("").reverse().join("")){
            return word
        }
    }
    return ""
};