// https://leetcode.com/problems/count-the-number-of-special-characters-i/

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let set = new Set(word.split(''));
    let count = 0;
    for (let c of set) {
        if (set.has(c.toLowerCase()) && set.has(c.toUpperCase())) count++
    }
    return count / 2
};

const result = numberOfSpecialChars('aA')
console.log(result);

// Observation:
// output Time Complexity : O(n)