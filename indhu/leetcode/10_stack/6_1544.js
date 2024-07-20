// https://leetcode.com/problems/make-the-string-great/description/

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        if (result[result.length - 1] && Math.abs(s.charCodeAt(i) - result[result.length - 1].charCodeAt(0)) === 32) {
            result.pop();
        } else result.push(s[i])
    }
    return result.join('')
};

const result = makeGood("abBAcC")
console.log(result);

// Observation:
// output Time Complexity : O(n)