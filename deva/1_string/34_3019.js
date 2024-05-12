// https://leetcode.com/problems/number-of-changing-keys/description/

/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    let output = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i - 1]) {
            if (s[i - 1].toLowerCase() !== s[i].toLowerCase()) {
                output++
            }
        }
    }
    return output
};