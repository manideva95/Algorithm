// https://leetcode.com/problems/first-unique-character-in-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map();
    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i
    }
    return -1
};