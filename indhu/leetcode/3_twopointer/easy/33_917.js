// https://leetcode.com/problems/reverse-only-letters/

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let i = 0, j = s.length - 1;
    let result = Array(s.length).fill(0)
    while (i <= j) {
        if ((s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) || (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123)) {
            if ((s.charCodeAt(j) > 64 && s.charCodeAt(j) < 91) || (s.charCodeAt(j) > 96 && s.charCodeAt(j) < 123)) {
                result[i] = s[j]; result[j] = s[i]
                i++; j--;
            } else {
                result[j] = s[j]
                j--;
            }
        } else {
            result[i] = s[i]
            i++
        }
    }
    return result.join('')
};