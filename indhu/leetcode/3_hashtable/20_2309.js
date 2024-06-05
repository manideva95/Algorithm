// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let set = new Set(s.split(''));
    let max = 0;
    for (let c = 0; c < s.length; c++) {
        if (set.has(s[c].toLowerCase()) && set.has(s[c].toUpperCase()))
            max = Math.max(max, s.toUpperCase().charCodeAt(c))
    }
    return max ? String.fromCharCode(max) : ''
};

const result = greatestLetter('aAzZ')
console.log(result);

// Observation:
// output Time Complexity : O(n)