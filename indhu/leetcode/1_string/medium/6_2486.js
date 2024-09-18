// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
    let i = 0
    for (let c of s) {
        if (c === t[i]) i++;
    }
    return t.length - i
};

const result = appendCharacters('coching', 'coding')
console.log(result);