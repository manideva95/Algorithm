// https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
    if (s.length < k) return s.split('').reverse().join('')
    let count = 0
    for (let i = 0; i < s.length - 1; i = i + k) {
        if (count) count--;
        else {
            let rev = s.slice(i, i + k).split('').reverse().join('');
            s = s.slice(0, i) + rev + s.slice(i + k, s.length);
            count++
        }
    }
    return s
};

const result = reverseStr('abcdefg', 1)
console.log(result);

// Observation:
// output Time Complexity : O(n)