// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    if (s.length == 1) return 1
    for (let c = 0; c < s.length; c++) {
        let i = 0; let j = s.length - 1;
        while (i < j) {
            if (s[i] !== s[j]) break;
            if (s[i] == s[i + 1] || s[j] == s[j - 1]) {
                if (s[i] == s[i + 1]) i++;
                if (s[j] == s[j - 1]) j--;
            } else break
        }
        if (s[i] !== s[j]) break;
        s = s.slice(i + 1, j);
        c = 0;
    }
    return s.length
};

const result = minimumLength('c')
console.log(result);

// Observation:
// output Time Complexity : O(n log n)