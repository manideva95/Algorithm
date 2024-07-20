// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let max = 0, count = 0;
    for (let c of s) {
        if (c === '(') count++;
        if (c === ')') {
            max = Math.max(max, count);
            count--;
        }
    }
    return max
};