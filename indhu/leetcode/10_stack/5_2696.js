// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let result = [];
    for (let c of s) {
        if ((result[result.length - 1] === 'C' && c === 'D') || (result[result.length - 1] === 'A' && c === 'B')) {
            result.pop();
        } else result.push(c)
    }
    return result.join('')
};

const result = minLength("ABFCACDB")
console.log(result);

// Observation:
// output Time Complexity : O(n)