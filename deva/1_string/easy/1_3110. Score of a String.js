// https://leetcode.com/problems/score-of-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let result = 0
    for (let i = 1; i < s.length; i++) {
        result = result + Math.abs(s.charCodeAt(i-1) - s.charCodeAt(i))
    }
    return result
};