// https://leetcode.com/problems/generate-parentheses/description/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const arr = []

    function dfs(open, close, s) {
        if (s.length === n * 2) {
            arr.push(s)
        }

        if (open > close) {
            dfs(open, close + 1, s + ')')
        }
        console.log(s);

        if (open < n) {
            dfs(open + 1, close, s + '(')
        }
    }
    dfs(0, 0, '')

    return arr
};

generateParenthesis(3)