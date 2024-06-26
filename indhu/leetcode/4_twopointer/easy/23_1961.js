// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let concat = ''
    for (let i = 0; i < words.length; i++) {
        concat = concat + words[i];
        if (s == concat) return true
    }
    return false
};

const result = isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode",])
console.log(result);

// Observation:
// output Time Complexity : O(n)