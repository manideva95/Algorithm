// https://leetcode.com/problems/remove-palindromic-subsequences/

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return 2
        j--; i++;
    }
    return 1
};

const result = removePalindromeSub('a')
console.log(result);

// Observation:
// output Time Complexity : O(n)
