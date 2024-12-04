// https://leetcode.com/problems/largest-substring-between-two-equal-characters/

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        let lastIndex = s.lastIndexOf(s[i])
        if (i !== lastIndex) {
            max = Math.max(max, (lastIndex - 1) - i);
        }
    }
    return max;
};


const result = maxLengthBetweenEqualCharacters('abdasdfca')
console.log(result);

// Observation:
// output Time Complexity : O(n)