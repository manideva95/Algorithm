// https://leetcode.com/problems/faulty-keyboard/

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let result = ""
    for (let letter of s) {
        if (letter == "i") {
            result = result.split("").reverse().join("")
        } else {
            result = result + letter
        }
    }
    return result
};