// https://leetcode.com/problems/di-string-match/description/

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let result = []
    let count = 0
    let decreaseCount = s.length
    for (let i = 0; i < s.length + 1; i++) {
        if (s[i] == "I") {
            result.push(count)
            count++
        } else {
            result.push(decreaseCount)
            decreaseCount--
        }
    }
    return result
};