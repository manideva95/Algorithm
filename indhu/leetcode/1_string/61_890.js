// https://leetcode.com/problems/find-and-replace-pattern/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    let result = []
    words.forEach((item) => {
        const permutation = new Map();
        for (let i = 0; i < item.length; i++) {
            const value = permutation.get(item[i]);
            if (value) {
                if (value !== pattern[i]) break
            } else permutation.set(item[i], pattern[i])
            if (i == item.length - 1 && permutation.size === new Set(pattern.split('')).size) result.push(item)
        }
    })
    return result
};

const result = findAndReplacePattern(["a", "b", "a", "a", "a", "a"], 'a')
console.log(result);

// Observation:
// Vocabulary: permutation, bijection
// output Time Complexity : O(n log n)