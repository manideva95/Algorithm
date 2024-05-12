// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    if (n == 1) {
        return "a"
    } else {
        let isEven = (n % 2 == 0) ? true : false
        let generatedString = ""
        if (isEven) {
            let i = 0
            while (i < n - 1) {
                generatedString += "a"
                i++
            }
            return generatedString + "b"
        } else {
            let i = 0
            while (i < n - 2) {
                generatedString += "a"
                i++
            }
            return generatedString + "b" + "c"
        }
    }
};