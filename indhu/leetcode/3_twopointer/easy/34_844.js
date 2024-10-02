// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '#') count++;
        if (s[i] !== '#' && count) {
            s = s.slice(0, i) + s.slice(i + 2, s.length); count--
        }
    }
    s = s.replaceAll('#', '')
    count = 0
    for (let i = t.length - 1; i >= 0; i--) {
        if (t[i] === '#') count++;
        if (t[i] !== '#' && count) {
            t = t.slice(0, i) + t.slice(i + 2, t.length); count--
        }
    }
    t = t.replaceAll('#', '');

    return s === t ? true : false
};

const result = backspaceCompare('ad#c', 'ad#c')
console.log(result);

// Observation:
// output Time Complexity : O(n)