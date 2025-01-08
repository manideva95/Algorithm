// https://leetcode.com/problems/reverse-words-in-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let ans = ''
    let val = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i].trim()) {
            val += s[i];
        } else if (val) {
            ans = ans ? val + ' ' + ans : val;
            val = '';
        }
    }
    if (val) ans = ans ? val + ' ' + ans : val;

    return ans
}; 