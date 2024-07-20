// https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/description/
/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        if ((s[i] % 2 && s[i + 1] % 2 || s[i] % 2 === 0 && s[i + 1] % 2 === 0) && s[i] > s[i + 1]) {
            [s[i], s[i + 1]] = [s[i + 1], s[i]]
            break;
        }
    }
    return s.join('')
};