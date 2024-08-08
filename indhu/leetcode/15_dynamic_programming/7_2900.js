// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
    for (let i = 1; i < groups.length; i++) {
        if (groups[i - 1] === groups[i]) {
            words[i] = null
        }
    }
    return words.filter(Boolean)
};

const result = getLongestSubsequence(["c", "d", "g"], [0, 0, 0])
console.log(result);