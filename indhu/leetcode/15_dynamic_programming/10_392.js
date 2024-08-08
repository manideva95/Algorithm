// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let iOft = 0, jOft = t.length - 1;

    let iOfs = 0, jOfs = s.length - 1;

    let count = 0

    while (iOft <= jOft) {
        if (t[jOft] === s[jOfs]) {
            count++
            jOfs--;
        }
        if (t[iOft] === s[iOfs] && iOft !== jOft) {
            count++
            iOfs++;
        }
        iOft++; jOft--;
        if (count === s.length) break
    }
    return count >= s.length ? true : false
};