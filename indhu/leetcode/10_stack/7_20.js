// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let value = [];
    for (let c of s) {
        let len = value.length - 1;
        if ((value[len] === '{' && c === '}') ||
            (value[len] === '(' && c === ')') ||
            (value[len] === '[' && c === ']')
        ) result.pop();
        else result.push(c)
    }
    return value.length ? false : true
};