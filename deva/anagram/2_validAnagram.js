// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let sFrequencyMap = {}
    let tFrequencyMap = {}


    for (let i = 0; i < s.length; i++) {
        sFrequencyMap[s[i]] = ((sFrequencyMap[s[i]] || 0) + 1)
        tFrequencyMap[t[i]] = ((tFrequencyMap[t[i]] || 0) + 1)
    }

    for (const char in sFrequencyMap) {
        if (sFrequencyMap[char] !== tFrequencyMap[char]) {
            return false
        }
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))