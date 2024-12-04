// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let splitBySpace = text.split(' ');
    let count = 0;
    if (!brokenLetters) return splitBySpace.length
    for (let s of splitBySpace) {
        let set = new Set(s.split(''));
        let i = 0;
        while (i < brokenLetters.length) {
            if (set.has(brokenLetters[i])) break;
            if (i == brokenLetters.length - 1) count++
            i++
        }
    }
    return count
};

const result = canBeTypedWords('hello world hello', '')
console.log(result);

// Observation:
// output Time Complexity : O(n)