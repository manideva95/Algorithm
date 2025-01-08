// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const palindrome = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--; right++;
        }
        return s.substring(left + 1, right)
    }
    let str = ''
    for (let i = 0; i < s.length; i++) {
        let odd = palindrome(i, i);
        let even = palindrome(i, i + 1);
        if (str.length < odd.length) {
            str = odd
        }
        if (str.length < even.length) {
            str = even
        }
    }
    return str;
};