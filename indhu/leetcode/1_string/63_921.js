// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    for (let c of s) {
        s = s.replaceAll('()', '')
    }
    return s.length
};

const result = minAddToMakeValid("()()()))")
console.log(result);

// Observation:
// output Time Complexity : O(n log n)