// https://leetcode.com/problems/valid-palindrome-ii/description/

/**
 * @param {string} s
 * @return {boolean}
 */

function validate(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j])
            return false
        i++; j--;
    }
    return true
}
var validPalindrome = function (s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (validate(s.slice(i, j))) return true;
            else if (validate(s.slice(i + 1, j + 1))) return true;
            else return false
        }
        i++; j--;
    }
    return true
};