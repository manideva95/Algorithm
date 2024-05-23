// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let firstHalfVowelsCount = 0
    let secondHalfVowelsCount = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (i < s.length / 2) {
                firstHalfVowelsCount++
            } else {
                secondHalfVowelsCount++
            }
        }
    }
    return firstHalfVowelsCount === secondHalfVowelsCount
};