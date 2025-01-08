// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let ans = '';
    s = s.trim();
    for (let i = 0; i < s.length; i++) {
        if (i === 0 && (s[0] === '+' || s[0] === '-')) {
            if (s[i] === '-') ans += s[i]
        } else if (s[i].match(/[0-9]/g)) {
            if ((ans[ans.length - 1] === '-' && s[i] == 0) || (ans.length === 0 && s[i] == 0)) {
            } else ans += s[i]
        }
        else break

        if (ans.length > 11) break

    }
    ans = ans && ans !== '-' ? parseInt(ans) : 0
    return Math.max(Math.min(ans, Math.pow(2, 31) - 1), -Math.pow(2, 31))
};

