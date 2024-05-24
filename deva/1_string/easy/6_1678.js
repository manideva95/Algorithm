// https://leetcode.com/problems/goal-parser-interpretation/description/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let result = command.replaceAll("()", "o")
    result = result.replaceAll("(al)", "al")
    return result
};