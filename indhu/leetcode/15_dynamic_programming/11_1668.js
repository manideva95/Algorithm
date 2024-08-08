// https://leetcode.com/problems/maximum-repeating-substring/description/

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    let max = 0, count = 0;
    for (let i = 0; i < sequence.length;) {
        if (sequence.slice(i, word.length + i) === word) {
            count++;
            max = Math.max(count, max);
            i = i + word.length
        } else if (count) {
            count = 0
            i = i - (word.length - 1)
        }
        else { count = 0; i++ }
    }
    return max
};

const result = maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")
console.log(result);